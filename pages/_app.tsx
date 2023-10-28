import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import localFont from "next/font/local";

const gilory = localFont({
  src: [
    {
      path: "../public/fonts/Gilroy-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "../public/fonts/Gilroy-Extrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-ExtraboldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/Gilroy-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Gilroy-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-SemiboldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/Gilroy-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/Gilroy-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Gilroy-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/Gilroy-UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-UltraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/Gilroy-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
  ],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div lang="en" className={gilory.className}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
