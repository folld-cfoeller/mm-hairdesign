import localFont from "next/font/local";

export const montserrat = localFont({
  src: [
    { path: "../assets/fonts/montserrat/Montserrat-Light.ttf", weight: "300", style: "normal" },
    { path: "../assets/fonts/montserrat/Montserrat-Regular.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/montserrat/Montserrat-Medium.ttf", weight: "500", style: "normal" },
    { path: "../assets/fonts/montserrat/Montserrat-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../assets/fonts/montserrat/Montserrat-Bold.ttf", weight: "700", style: "normal" },
    { path: "../assets/fonts/montserrat/Montserrat-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
});

export const roboto = localFont({
  src: [
    { path: "../assets/fonts/roboto/Roboto-Light.ttf", weight: "300", style: "normal" },
    { path: "../assets/fonts/roboto/Roboto-Regular.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/roboto/Roboto-Medium.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-roboto",
  display: "swap",
  preload: true,
});
