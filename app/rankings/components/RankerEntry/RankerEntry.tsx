import { api } from "@/convex/_generated/api"
import { FunctionReturnType } from "convex/server"
import styled from "styled-components"
import { AbilityTimeline } from "./AbilityTimeline"



const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #222;
    margin-bottom: 8px;
    padding-left: 4px;

    font-size: 12px;
    gap: 12px;
`

const Identifier = styled.div`
    display: flex;
    flex-direction: column;
    width: 100px;
`
const TimelineWrapper = styled.div`
    flex: 1;
    display: flex;
    padding: 4px;
`

interface RankerEntryProps {
    data: FunctionReturnType<typeof api.warcraftlogs.queries.getRankingsForEncounter.getRankingsForEncounter>[number]
}
export function RankerEntry({ data,}: RankerEntryProps) {
    if (!data) {
        return <div>No data</div>
    }

    return (
        <Wrapper>
            <Identifier>
                <p>
                    {data.name}
                </p>
                <p>
                    {Math.floor(data.amount)}
                </p>
            </Identifier>
            <TimelineWrapper>
                    <AbilityTimeline abilities={data.abilities} killTime={data.duration} />
            </TimelineWrapper>
        </Wrapper>
    )
}