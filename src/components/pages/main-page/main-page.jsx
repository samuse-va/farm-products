import React from "react";
import About from "/src/components/blocks/about/about";
import ProsCons from "/src/components/blocks/pros-cons/pros-cons";
import { TitleLevel } from "/src/components/ui/title/title";

export default function MainPage({ data_pros, data_cons }) {
  return (
    <>
      <About level={TitleLevel.H1} />
      <ProsCons
        data_pros={data_pros}
        data_cons={data_cons}
        level={TitleLevel.H2}
      />
    </>
  );
}
