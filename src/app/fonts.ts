import { Inter, Roboto_Mono, Playball } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const playball = Playball({
  weight: "400",
  preload: true,
  subsets: ["latin"],
});
