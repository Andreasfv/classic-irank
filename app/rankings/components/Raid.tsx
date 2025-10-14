"use client";

import { api } from "@/convex/_generated/api"
import { FunctionReturnType } from "convex/server";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
interface RaidProps {
    zones: FunctionReturnType<typeof api.warcraftlogs.queries.getZoneWithEncounters.getZonesWithEncounters>;
}
export default function Raid({ zones }: RaidProps) {
    const router = useRouter();
    const params = useParams();
    console.log("Params:", params);

    const [selectedZone, setSelectedZone] = useState<number | null>(
        params?.slug && params.slug[2] !== undefined
            ? Number(params.slug[2])
            : zones[0].zoneID || null
    );
    const [selectedEncounter, setSelectedEncounter] = useState<number | null>(
        params?.slug && params.slug[3] !== undefined
            ? Number(params.slug[3])
            : zones[0].encounters[0]?.encounterID || null
    );


    function selectEncounter(encounterID: number, zoneID: number) {
        if (selectedEncounter === encounterID) {

        }
        else {
            if (params?.slug && params.slug.length > 1) {
                router.push(`/rankings/${params?.slug[0]}/${params.slug[1]}/${zoneID}/${encounterID}`, { shallow: true});
                setSelectedEncounter(encounterID);
            }
        }
    }

    function renderRaid(zone: FunctionReturnType<typeof api.warcraftlogs.queries.getZoneWithEncounters.getZonesWithEncounters>[number]) {
        return(
            <div key={"raid"+zone._id} className="flex">
            <div className="pr-2 justify-center text-sm" key={zone._id}>{zone.name}: </div>
            {zone.encounters.map(encounter => (
                <div key={"containter"+encounter.encounterID} onClick={()=> {selectEncounter(encounter.encounterID, zone.zoneID)}}className={
                    `flex pr-1 pl-1 items-center justify-center text-sm mr-2 border hover:bg-sky-800 hover:cursor-pointer`
                    + (selectedEncounter === encounter.encounterID ? " bg-red-800" : "")}>
                    <span key={encounter.encounterID} className="">{encounter.name.substring(0, 3)}</span>
                </div>
            ))}
        </div>
)
    }

    const wtf = zones.map(zone => (renderRaid(zone)));

    return (
        <>
            {wtf}
        </>

    )
}
