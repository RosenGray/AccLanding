import contenten from "@/assets/images/contenten.png";
import colorsen from "@/assets/images/colorsen.png";
import toolsen from "@/assets/images/toolsen.png";
import contenthe from "@/assets/images/contenthe.png";
import colorshe from "@/assets/images/colorshe.png";
import toolshe from "@/assets/images/toolshe.png";

type Item = { image: string };

export const items: Record<string, Array<Item>> = {
  en: [
    { image: contenten.src },
    { image: colorsen.src },
    { image: toolsen.src },
  ],
  he: [
    { image: contenthe.src },
    { image: colorshe.src },
    { image: toolshe.src },
  ],
};
