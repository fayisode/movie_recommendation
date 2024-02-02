import React from "react";
import "./home_page.css";
import Timeline from "../components/time_line/time_line.js";
import { SideNavBar } from "../components/side_nav/side_nav_bar.js";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__nav">
        <SideNavBar />
      </div>
      <div classname="homepage__Timeline">
        <Timeline />
      </div>
    </div>
  );
}

export default Homepage;
