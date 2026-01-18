"use client";
import { abilityData } from "@/assets/abilityData/abilities";
import { api } from "@/convex/_generated/api";
import { FunctionReturnType } from "convex/server";
import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface AbilityTimelineProps {
    abilities: FunctionReturnType<typeof api.warcraftlogs.queries.getRankingsForEncounter.getRankingsForEncounter>[number]["abilities"];
    killTime: number;
}

const Wrapper = styled.div`
    position: relative;
    flex: 1;
    display: flex;
    padding: 16px;
    border: 1px solid black;
    overflow-x: auto;
`

interface AbilityBoxProps {
    position: number;
    yPosition?: number;
}
const AbilityBox = styled.div<AbilityBoxProps>`
    ${props => `left: ${props.position}px;`}
    ${props => props.yPosition !== undefined ? `top: ${props.yPosition}px;` : `top: 0px;`}
    display:flex;
    position: absolute;
    height: 16px;
    width: 16px;
    background-color: red;
`

const Killbox = styled.div<AbilityBoxProps>`
    ${props => `left: ${props.position}px;`}
    position: absolute;
    height: 100%;
    top: 0%;
    width: 2px;
    background-color: yellow;
`

const AbilityIcon = styled.img`
    width: 100%;
    height: 100%;
    background-color: green;
`
    
const AbilityInfoBox = styled.div<AbilityBoxProps>`
`
export function AbilityTimeline({ abilities, killTime }: AbilityTimelineProps) {
    const timelineRef = useRef<HTMLDivElement>(null);
    const [abilityList, setAbilityList] = useState<ReactNode[]>()
    function calculatePosition(timestamp: number): number {
        //200px is one minute
        if (!timelineRef.current) return 0;

        const position = (timestamp / 1000) * 4; 
        return position;
    }

    function getAbilityData(abilityID: number) {
        const ability = abilityData[abilityID];
        if (ability) {
            return ability;
        } else {
            return null;
        }
    }


    function renderPlayerAbilities() {
        const sortedAbilities = [...abilities].sort((a, b) => a.timestamp - b.timestamp);
        const boxes = [];
        for (let i = 0; i < sortedAbilities.length; i++) {
            const ability = sortedAbilities[i];
            const abilityData = getAbilityData(ability.abilityGameID);
            let s = 0;
            if(i !== 0) {
                while(s < i && 
                    i - s >= 0 && 
                    calculatePosition(ability.timestamp) - calculatePosition(sortedAbilities[i - (s + 1)].timestamp) < 9 && 
                    calculatePosition(ability.timestamp) - calculatePosition(sortedAbilities[i - (s + 1)].timestamp) > - 9) 
                    {
                    const prevAbility = sortedAbilities[i - s];
                    if(!prevAbility) break;
                    if (calculatePosition(ability.timestamp) - calculatePosition(sortedAbilities[i - (s + 1)].timestamp) < 9 && calculatePosition(ability.timestamp) - calculatePosition(sortedAbilities[i - (s + 1)].timestamp) > -9) {
                        s++;
                    } else {
                        break;
                    }
                }
            }

            boxes.push(<AbilityBox position={calculatePosition(ability.timestamp)} yPosition={s * 8} key={i}>
                {abilityData ? <AbilityIcon src={`/abilityIcons/${abilityData.icon}.png`}  title={abilityData.name} /> : null}
            </AbilityBox>)

        }
        boxes.push(<Killbox position={calculatePosition(killTime)} key="Kill"/>)
        setAbilityList(boxes);
    }
    //on component mount, render abilities
    useEffect(() => {
        renderPlayerAbilities();
    }, [abilities, killTime]);
    return <Wrapper ref={timelineRef}>{abilityList ? abilityList : null}</Wrapper>
}
