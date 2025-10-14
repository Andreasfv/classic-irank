// I was considering having this an automatic object fetched from WarcraftLogs but at the same time i don't want to
// run queries for BWD, BoT, TotFW & Firelands with each update as it doesn't matter and I don't care about the raids
// that aren't current content.

export const activeZones = {
  dragonSoul: {
    id: 1033,
    name: "Dragon Soul",
  },
  fireLands: {
    id: 1027,
    name: "Firelands",
  },
};

export const oldZones = {
  // Firelands is merely a test entry. I'm not sure I'll ever run a query for it.
  // It's just to test support for when DS goes out of activity.
  fireLands: {
    id: 1027,
    frozen: true,
    name: "Firelands",
  },
};
