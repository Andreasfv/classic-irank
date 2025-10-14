import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import Raid from "./components/Raid"
export default async function Layout({ children }) {
      const zonesToFetch = [1033, 1027]
      const zones = await fetchQuery(api.warcraftlogs.queries.getZoneWithEncounters.getZonesWithEncounters, {
        zones: zonesToFetch
      })

    return (
        <>
        <div className="flex">
            <div className="ml-auto">
                    <Raid zones={zones} />
            </div>
        </div>
            {children}
        </>
    )
}