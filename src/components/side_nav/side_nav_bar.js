import React from "react";
import "./side_nav_bar.css";
import RoofingIcon from "@mui/icons-material/Roofing";
import SearchIcon from "@mui/icons-material/Search.js";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline.js";
import MessageIcon from "@mui/icons-material/Message.js";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone.js";
import MenuIcon from "@mui/icons-material/Menu.js";

export const SideNavBar = () => {
  return (
    <>
      <div className="sidenav">
        <div className="sidenav__button">
          <button>
            <div className="side__button">
              <RoofingIcon />
              <span>Home</span>
            </div>
          </button>
          <button>
            <div className="side__button">
              <SearchIcon />
              <span>Search</span>
            </div>
          </button>
          <button>
            <div className="side__button">
              <PersonOutlineIcon />
              <span>Profile</span>
            </div>
          </button>
          <button>
            <div className="side__button">
              <MessageIcon />
              <span>Inbox</span>
            </div>
          </button>
          <button>
            <div className="side__button">
              <NotificationsNoneIcon />
              <span>Notifications</span>
            </div>
          </button>
        </div>
        <div className="sidenav__more">
          <button className="side__more">
            <MenuIcon />
            <span>More</span>
          </button>
        </div>
      </div>
    </>
  );
};

