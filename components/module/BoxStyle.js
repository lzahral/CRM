import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        border: 0,
        borderRadius: 7,
        padding: "30px",
        margin: "32px",
        alignItems:'center',
        border: `solid 1px ${theme.palette.grey.A400}`,
        "& p": {
            color: theme.palette.text.primary,
            display: "inline",
        },
        "& span": {
            color: theme.palette.primary.main,
        },
    },
}));

function BoxStyle({ children }) {
    const classes = useStyles();
    return <Box className={classes.root}>{children}</Box>;
}

export default BoxStyle;
