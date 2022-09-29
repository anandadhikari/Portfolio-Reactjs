import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./logo.png"

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
        fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
    background: "#f4e3d3"
  },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
      <div className= {classes.svgHover}>
       <img  style={{ background: "#f4e3d3",backgroundSize: 'contain',backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}
        src={ logo } alt={ "logo" }/>
      </div>
    );
};
