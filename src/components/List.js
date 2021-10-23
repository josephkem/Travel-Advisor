import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 25,
  },
}));

const List = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>List</h1>
    </div>
  );
};

export default List;
