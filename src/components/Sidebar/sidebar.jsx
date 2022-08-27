import "./sidebar.css";
import { Avatar, Grid, IconButton, Search } from "@mui/material";
import { MdOutlineDonutLarge } from "react-icons/md";
import { BsChatTextFill, BsThreeDotsVertical, BsSearch } from "react-icons/bs";

import SidebarRow from "./Sidebar-Row/sidebar.row";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <Grid className="sidebar-header" container direction="row">
        <Grid className="sidebar-avatar" item sm={2}>
          <Avatar />
        </Grid>
        <Grid item sm={4} />
        <Grid container item sm={6}>
          <Grid item sm={3}>
            <IconButton>
              <MdOutlineDonutLarge className="sidebar-icon" />
            </IconButton>
          </Grid>
          <Grid item sm={3}>
            <IconButton>
              <BsChatTextFill className="sidebar-icon" />
            </IconButton>
          </Grid>
          <Grid item sm={3}>
            <IconButton>
              <BsThreeDotsVertical className="sidebar-icon" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <div className="sidebar-search-container">
        <div className="sidebar-search">
          <BsSearch className="sidebar-search-icon" />
          <input type="text" placeholder="search messages" />
        </div>
      </div>
      <div className="chatlist-container">
        <SidebarRow />
        <SidebarRow />
      </div>
    </div>
  );
};

export default Sidebar;
