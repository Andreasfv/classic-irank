"use client";
import { useParams, useRouter } from "next/navigation";

import { api } from "@/convex/_generated/api";
import { FunctionReturnType } from "convex/server";
import { useState } from "react";
import styled from "styled-components"
import MenuCategory from "./MenuCategory";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    background-color: #1e1e1e;

    height: 100%;
`


interface RaidProps {
    zones: FunctionReturnType<typeof api.warcraftlogs.queries.getZoneWithEncounters.getZonesWithEncounters>;
}



export default function Menu({zones }: RaidProps) {
    const router = useRouter();
    const params = useParams();
    const [selectedEncounter, setSelectedEncounter] = useState<number | null>(zones[0].encounters[0]?.encounterID || null);
        
    function selectEncounter(encounterID: number, zoneID: number) {
        if (selectedEncounter === encounterID) {}
        else {
            if (params?.slug && params.slug.length > 1) {
                router.push(`/rankings/${params?.slug[0]}/${params.slug[1]}/${zoneID}/${encounterID}`, { });
                setSelectedEncounter(encounterID);
            }
        }
    }
    const list = zones.map(zone => (
        <MenuCategory key={zone._id} name={zone.name} menuItems={zone.encounters.map(encounter => ({name: encounter.name, onClick: () => selectEncounter(encounter.encounterID, zone.zoneID)}))} />
    ))

    return (
        <Wrapper>
            {list}
        </Wrapper>
    )
}