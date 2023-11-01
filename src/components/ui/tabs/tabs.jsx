import React, { useState } from "react";
import { TitleList, TitleButton, Content } from "./styles";

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <TitleList>
        {tabs &&
          tabs.length &&
          tabs.map((item, index) => {
            if (index === activeTab) {
              return (
                <TitleButton active key={item.title}>
                  {item.title}
                </TitleButton>
              );
            }
            return (
              <TitleButton key={item.title} onClick={() => setActiveTab(index)}>
                {item.title}
              </TitleButton>
            );
          })}
      </TitleList>
      <Content>{tabs[activeTab].content}</Content>
    </>
  );
}

export default Tabs;
