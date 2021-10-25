import {
  CircularProgress,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Grid,
} from "@material-ui/core";
import React, { createRef, useState, useEffect } from "react";
import PlaceDetails from "./PlaceDetails";

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
    height: "75vh",
    overflow: "auto",
  },
}));

const List = ({ type, setType, isLoading, childClicked, places }) => {
  const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setElRefs((refs) => {
      return Array(places.length)
        .fill()
        .map((_, index) => createRef());
    });
  }, [places]);

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
          <Grid container spacing={3} className={classes.list}>
            {places &&
              places.map((place, index) => {
                return (
                  <Grid item xs={12} ref={elRefs[index]}>
                    <PlaceDetails
                      selected={Number(childClicked) === index}
                      place={place}
                      key={index}
                      placeRef={elRefs[index]}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default List;
