import {
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
}));

const List = ({ type, setType, isLoading, childClicked, places }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl}>
        <InputLabel id="type">Type: </InputLabel>
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
    </div>
  );
};

export default List;
