// bg-zinc-900 border-zinc-900
// bg-blue-700 border-blue-700
// bg-rose-600 border-rose-600
// bg-orange-600 border-orange-600
// bg-yellow-400 border-yellow-400
// bg-green-600 border-green-600

import { PRODUCT_PRICES } from "@/config/products";

export const COLORS = [
  { label: "Black", value: "black", tw: "zinc-900" },
  //   { label: "Blue", value: "blue", tw: "blue-700" },
  //   { label: "Rose", value: "rose", tw: "rose-600" },
  { label: "Orange", value: "orange", tw: "orange-600" },
  { label: "Yellow", value: "yellow", tw: "yellow-400" },
  { label: "Green", value: "green", tw: "green-600" },
] as const;

export const MODELS = {
  name: "models",
  options: [
    {
      label: "iPhone 13",
      value: "iphone13",
    },
    {
      label: "iPhone 14",
      value: "iphone14",
    },
    {
      label: "iPhone 15",
      value: "iphone15",
    },
    {
      label: "iPhone 16",
      value: "iphone16",
    },
  ],
} as const;

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "Silicone",
      value: "silicone",
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: "Soft Polycarbonate",
      value: "polycarbonate",
      description: "Scratch-resistant coating",
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const;

export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Smooth Finish",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Textured Finish",
      value: "textured",
      description: "Soft grippy texture",
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const;
