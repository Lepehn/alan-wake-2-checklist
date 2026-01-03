import { GAME_CONFIG } from "./config.js";
import { STATUSES, COMPLETED_STATUSES } from "./statuses.js";
import { CATEGORIES } from "./categories.js";

import { lunchBox } from "./data/lunchBox.js";
import { charm } from "./data/charm.js";
import { cultStash } from "./data/cultStash.js";
import { echo } from "./data/echo.js";
import { koskelaAd } from "./data/koskelaAd.js";
import { manuscript } from "./data/manuscript.js";
import { locationMap } from "./data/locationMap.js";
import { radioShow } from "./data/radioShow.js";
import { writersJourney } from "./data/writersJourney.js";
import { weapon } from "./data/weapon.js";

console.log("GAME index loaded");

export const GAME = {
  ...GAME_CONFIG,
  statuses: STATUSES,
  completedStatuses: COMPLETED_STATUSES,
  categories: CATEGORIES,
  data: {
    lunchBox,
    charm,
    cultStash,
    echo,
    koskelaAd,
    manuscript,
    locationMap,
    radioShow,
    writersJourney,
    weapon
  }
};