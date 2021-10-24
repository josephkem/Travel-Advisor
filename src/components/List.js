import {
  CircularProgress,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 25,
  },
  formControl: {
    margin: 10,
    minWidth: 120,
    marginBottom: 30,
  },
  loading: {
    width: "100%",
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    height: "75hvh",
    overflow: "auto",
  },
}));

const List = ({ type, setType, isLoading, childClicked, places }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      ) : (
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel id="type">Type </InputLabel>
            <Select
              id="placeType"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}></Grid>
        </div>
      )}
    </div>
  );
};

export default List;
