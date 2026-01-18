"use client"
import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import React from "react"
import { RankerEntry } from "../components/RankerEntry/RankerEntry"
import styled from "styled-components"
import { FunctionReturnType } from "convex/server"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    `

export default function Page({ params }: { params: { slug: string[] } }) {
    const parmesan = React.use<{slug: string[]}>(params)
    const rankings = useQuery(api.warcraftlogs.queries.getRankingsForEncounter.getRankingsForEncounter, {encounterID: parseInt(parmesan.slug[3]), spec: "Frost"})
    
    console.log(rankings)


    function generateRankerEntries() {
        if (!rankings) {
            return [];
        }

        return rankings.map((ranking, index) => (
            <RankerEntry key={index} data={ranking} />
        ))
    }

    if (!rankings) {
        return <div>Loading...</div>
    }
    
    return <Wrapper>
        {parmesan.slug}
        {generateRankerEntries()}

        </Wrapper>
}