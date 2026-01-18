import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import styled from "styled-components";
import Menu from "./components/Menu/Menu";

const Wrapper = styled.div`
    display: flex; 
    flex-direction: row;

    height: 100%;
`

const ChildrenWrapper = styled.div`
    flex-grow: 1;
    height: 100%;
    overflow-y: auto;
    `
const MenuWrapper = styled.div`
height: 100%;
    `
export default async function Layout({ children }) {
      const zonesToFetch = [1046] // Find a way to make this dynamic
      const zones = await fetchQuery(api.warcraftlogs.queries.getZoneWithEncounters.getZonesWithEncounters, {
        zones: zonesToFetch
      })

    return (
        <>
            <Wrapper>
                <MenuWrapper>
                    <Menu zones={zones}></Menu>
                </MenuWrapper>
                <ChildrenWrapper>

                {children}
                </ChildrenWrapper>
            </Wrapper>
        </>
    )
}