import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from "next/image";
// import { Balsamiq_Sans } from "next/font/google";

// const balsamiq = Balsamiq_Sans({
//   weight: "400",
//   subsets: ["latin"],
// });

export default {
  logo: (
    <>
      {/* <Image
        src="/images/amigrant.png"
        alt="logo"
        width={38}
        height={38}
        style={{ marginLeft: ".4em" }}
      /> */}
      <span
        // className={`${balsamiq.className} logo`}
        // style={{ marginLeft: ".4em", marginTop: fontSize: "1.5em"}}
        style={{fontSize: "1.5em"}}
      >
        {" "}
        Amigrant
      </span>
    </>
  ),

  project: {
    link: "https://github.com/asetalias/amigrant-docs",
  },

  docsRepositoryBase: "https://github.com/asetalias/amigrant-docs/blob/main",

  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },

  useNextSeoProps() {
    return {
      titleTemplate: "%s - Amigrant",
    };
  },

  nextThemes: {
    defaultTheme: "dark",
  },

  chat: {
    link: "https://discord.gg/vdYYXPmpBh",
  },

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Amigrant Documentation" />
      <meta property="og:description" content="Amigrant Documentation" />
      <link rel="icon" href="/images/favicon.ico" />
    </>
  ),

  footer: {
    text: (
      <>
        <span style={{ marginLeft: "1em", marginTop: ".2em" }}>
          <a href="https://asetalias.in" target="_blank">
            Made with ❤️ by ALiAS
          </a>
        </span>
      </>
    ),
  },

  search: {
    placeholder: "Search",
  },
};
