import React from "react";
import ImportBox from "./ImportBox";
import PreviewBox from "./PreviewBox";
import OptionsBox from "./OptionsBox";

const MainPage = () => {
  return (
    <>
      <div className="box">
        <ImportBox />
        <PreviewBox />
      </div>
      <OptionsBox />
    </>
  );
};

export default MainPage;
