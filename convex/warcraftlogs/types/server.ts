enum Region {
    EU = "EU",
    US = "US",
}
export interface Server {
    id: number;
    name: string;
    region: Region;
}