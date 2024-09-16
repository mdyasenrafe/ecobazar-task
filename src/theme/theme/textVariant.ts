export enum TextVariants {
  Display01 = "Display01",
  H1 = "H1",
  H2 = "H2",
  H3 = "H3",
  H4 = "H4",
  H5 = "H5",
  P1 = "P1",
  P2 = "P2",
  P3 = "P3",
  P4 = "P4",
  P5 = "P5",
  P6 = "P6",
}

export const TextStyles: Record<TextVariants, string> = {
  [TextVariants.Display01]:
    "text-6xl font-semibold text-gray-900 dark:text-white font-poppins leading-[86px]",
  [TextVariants.H1]:
    "text-5xl font-semibold text-gray-900 dark:text-white font-poppins leading-[67.2px]",
  [TextVariants.H2]:
    "text-4xl font-semibold text-gray-900 dark:text-white font-poppins leading-[57.6px]",
  [TextVariants.H3]:
    "text-3xl font-semibold text-gray-900 dark:text-white font-poppins leading-[48px]",
  [TextVariants.H4]:
    "text-2xl font-semibold text-gray-900 dark:text-white font-poppins leading-[43.2px]",
  [TextVariants.H5]:
    "text-xl font-semibold text-gray-900 dark:text-white font-poppins leading-[38.4px]",
  [TextVariants.P1]:
    "text-2xl font-normal text-gray-900 dark:text-white font-poppins",
  [TextVariants.P2]:
    "text-xl font-normal text-gray-900 dark:text-white font-poppins",
  [TextVariants.P3]:
    "text-lg font-normal text-gray-900 dark:text-white font-poppins",
  [TextVariants.P4]: "font-base text-gray-800 dark:text-white font-poppins",
  [TextVariants.P5]: "text-sm text-gray-700 dark:text-white font-poppins",
  [TextVariants.P6]: "text-xs text-gray-600 dark:text-white font-poppins",
};

export type TextVariant = keyof typeof TextVariants;
