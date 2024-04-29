import { getLanguageCode } from "lib/i18n/iso6391";
import { Item } from "types/Item";

export const tip: Item[] = [
  {
    category: "tip",
    image: "lightsats.jpg",
    languageCodes: [getLanguageCode("English")],
    platforms: ["web"],
    placeholderDataUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nGNgYGDg4uISERFhgIADBw58+/YVyvn9+/eJEyegHBEREVZWViALAB/1CxAyCekdAAAAAElFTkSuQmCC",
    name: "Lightsats",
    slogan: "Gift sats without losing them✌🏼",
    link: "/",
    lightsatsRecommended: true,
  },
  {
    category: "tip",
    image: "tippinme.png",
    languageCodes: [getLanguageCode("English")],
    platforms: ["web"],
    placeholderDataUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/ALaYj9u+tNzHxf/28QBgV2o8OVU/PVnKws4AHC5SDCJIPEVrxcXXAAAQQ0FchpOfvMXL4bEJGMeAmz8fAAAAAElFTkSuQmCC",
    name: "Tippin.me",
    slogan:
      "An easy way to receive small tips and micro-payments across the web, using Lightning Network and Bitcoin.",
    link: "https://lgt.st/tippin.me",
    lightsatsRecommended: false,
  },
];
