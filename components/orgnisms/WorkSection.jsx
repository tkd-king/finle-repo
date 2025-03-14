import React, { useState } from "react";
import "../../app/globals.css";
import WorkButtons from "../molecules/WorkButtons";
import WorkProduct from "../atoms/WorkProduct";
import All from "../molecules/All";
import App from "../molecules/App";
import Branding from "../molecules/Branding";
import Ui from "../molecules/Ui";
import Headings from "../atoms/Headings";


function WorkSection() {
    const [activeTab, setActiveTab] = useState("all");

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    return ( 
        <div className=" flex flex-col items-center  pt-[70px] gap-[30px] " id="works" >
            <Headings level='2' text="my recent works" />
            <div className=" work-section items-center mb-[70px]  gap-[50px] flex flex-col    ">
                <WorkButtons
                    all={() => handleTabChange("all")}
                    app={() => handleTabChange("app")}
                    branding={() => handleTabChange("branding")}
                    ui={() => handleTabChange("ui")}
                />
                <div className=" branding ">
                    <div >{activeTab === "all" && <All />}</div>
                    <div>{activeTab === "app" && <App />}</div>
                    <div >{activeTab === "branding" && <Branding />}</div>
                    <div >{activeTab === "ui" && <Ui />}</div>
                </div>
            </div>
        </div>
    );
}

export default WorkSection;
