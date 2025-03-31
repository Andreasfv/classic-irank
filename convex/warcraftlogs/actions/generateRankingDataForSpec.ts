import { v } from "convex/values";
import { action } from "../../_generated/server";
import { ClassName, ReportCast, Spec, SpecRankingForEncounter } from "../types";
import { internal } from "../../_generated/api";
import { getSpecRanking } from "../wclApi/specRanking/getSpecRankingForEncounter";
import { getActorsReport } from "../wclApi/report/getReportActors";
import { getRankerActions, SpecKeys } from "../wclApi/report/getRankerActions";

interface GenerateRankingDataForSpecInput {
  className: ClassName;
  spec: SpecKeys<ClassName>;
  boss: number;
  difficulty: number;
  tenMan: boolean;
}

interface GenerateRankingDataForSpecOutput {
  reportCode: string;
  fightID: number;
  bossID: number;
  name: string;
  className: ClassName;
  spec: SpecKeys<ClassName>;
  amount: number;
  difficulty: number;
  tenMan: boolean;
  duration: number;
  startTime: number;
  fightStartTime: number;
  abilities: ReportCast[];
}

export const generateRankingDataForSpec = action({
  args: {
    className: v.string(),
    spec: v.string(),
    boss: v.number(),
    difficulty: v.number(),
    tenMan: v.boolean(),
  },
  handler: async (ctx, args) => {
    const { className, spec, boss, difficulty, tenMan } =
      args as GenerateRankingDataForSpecInput;
    const token = await ctx.runAction(
      // @ts-ignore
      internal.warcraftlogs.wclApi.auth.getAccessToken
        .getWarcraftLogsTokenAction
    );

    const specRankingData: SpecRankingForEncounter[] = await getSpecRanking({
      accessToken: token,
      className: className as ClassName,
      spec: spec as Spec,
      boss: boss,
      difficulty: difficulty,
      tenMan: tenMan,
    });
    console.log("Spec Rankings fetched");
    const rankerObjects: GenerateRankingDataForSpecOutput[] = [];

    for (const ranker of specRankingData) {
      console.log(`Working on ${ranker.name}`);
      const reportActors = await getActorsReport({
        accessToken: token,
        fightID: ranker.report.fightID,
        reportCode: ranker.report.code,
      });

      const rankerActorID = reportActors.report.masterData.actors.find(
        (actor) => actor.name === ranker.name
      )?.id;
      const fightStartTime = reportActors.report.fights.find(
        (fight) => fight.id === ranker.report.fightID
      )?.startTime;

      if (rankerActorID) {
        const rankerActions = await getRankerActions<ClassName>({
          accessToken: token,
          className: className,
          spec: spec,
          fightID: ranker.report.fightID,
          sourceID: rankerActorID,
          reportCode: ranker.report.code,
        });

        const rankerData: GenerateRankingDataForSpecOutput = {
          reportCode: ranker.report.code,
          bossID: boss,
          fightID: ranker.report.fightID,
          name: ranker.name,
          className: className,
          spec: spec,
          amount: ranker.amount,
          difficulty: ranker.hardModeLevel,
          tenMan: tenMan,
          duration: ranker.duration,
          startTime: ranker.startTime,
          fightStartTime: fightStartTime!,
          abilities: [],
        };

        for (const action in rankerActions.data.reportData.report) {
          const refactoredAbilities = rankerActions.data.reportData.report[
            action
          ].data.map((ability) => {
            ability.timestamp = ability.timestamp - fightStartTime!;
            return ability;
          });

          rankerData.abilities.push(...refactoredAbilities);
        }
        rankerObjects.push(rankerData);
      }
    }
    await ctx.runMutation(internal.warcraftlogs.mutations.createRankerEntries, {
      entries: rankerObjects,
    });

    return rankerObjects;
  },
});
