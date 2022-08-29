import "./sidebar.row.css";
import { Avatar, Grid } from "@mui/material";

const SidebarRow = () => {
  return (
    <Grid container className="sidebar-row">
      <Grid className="sidebar-image" item md={2} sm={2}>
        <Avatar className="sidebar-avatar" sx={{ width: 45, height: 45 }}>
          {"AF"}
        </Avatar>
      </Grid>
      <Grid className="sidebar-info" container item me={10} sm={10}>
        <Grid container item direction="column" md={8} sm={6}>
          <Grid className="sidebar-name-container" item>
            <h3 className="sidebar-name">The Great Debate</h3>
          </Grid>
          <Grid item>
            <p className="sidebar-message">Hey, what are you up to?</p>
          </Grid>
        </Grid>
        <Grid className="sidebar-time-container" item md={4} sm={6}>
          <p className="sidebar-time">12:00 AM</p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SidebarRow;
