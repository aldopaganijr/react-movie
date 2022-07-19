import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import TvIcon from '@mui/icons-material/Tv';
import TheatersIcon from '@mui/icons-material/Theaters';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import React from 'react';



const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.30)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    borderRadius: "16px",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

 

  useEffect(() => {
    if (value === 0) {
      history.push("/");
    } else if (value === 1) {
      history.push("/movies");
    } else if (value === 2) {
      history.push("/series");
    } else if (value === 3) {
      history.push("/search");
    }
  }, [value, history]);

  return (
    <BottomNavigation
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
    showLabels
    className={classes.root}
  >
      <BottomNavigationAction
        style={{ color: "#FCC039" }}
        label="Trending"
        icon={<LocalFireDepartmentIcon />}
      />
      <BottomNavigationAction
        style={{ color: "#FCC039" }}
        label="Movies"
        icon={<TheatersIcon />}
      />
      <BottomNavigationAction
        style={{ color: "#FCC039" }}
        label="TV Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "#FCC039" }}
        label="Search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}