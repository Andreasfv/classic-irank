"use client";
import { api } from "@/convex/_generated/api";
import { useAction } from "convex/react";
import Image from "next/image";

export default function Home() {
  // @ts-expect-error depth is out ofmy control
  const test3 = useAction(api.warcraftlogs.specRanking.getSpecRankingForEncounter.getSpecRankingForEncounterAction)
  const getActors = useAction(api.warcraftlogs.report.getReportActors.getActorsReportAction)
  // @ts-ignore
  const getRankerActions = useAction(api.warcraftlogs.report.getRankerActions.getRankerActionsAction)
  async function handleClick() {
    const encounterRankings = await test3({
      className: "DeathKnight",
      spec: "Frost",
      boss: 1292,
      difficulty: 4,
      tenMan: true
    })

    const firstRanking = encounterRankings[0]
    const playerName = firstRanking.name
    console.log(firstRanking.amount)
    
    const actorsReport = await getActors({
      reportCode: firstRanking.report.code,
      fightID: firstRanking.report.fightID
    })
    
    const playerActorObject = actorsReport.masterData.actors.find(actor => actor.name === playerName)
    console.log(playerActorObject)
    if(!playerActorObject) {
      throw new Error("Player not found in report")
    }

    const rankerActions = await getRankerActions({
      className: "DeathKnight",
      spec: "Frost",
      fightID: firstRanking.report.fightID,
      sourceID: playerActorObject!.id,
      reportCode: firstRanking.report.code
    })
    console.log(rankerActions)
  }
  
  const gigaTest = useAction(api.warcraftlogs.specRanking.generateRankingDataForSpec.generateRankingDataForSpec)
  async function handleClick2() {
    const rankingData = await gigaTest({
      boss: 1292,
      className: "DeathKnight",
      difficulty: 4,
      spec: "Frost",
      tenMan: true,
    })
    console.log(rankingData)
  }
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button className="
            rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            onClick={handleClick2}>
              Test
          </button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
