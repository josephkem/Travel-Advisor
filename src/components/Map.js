import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import GoogleMapReact from "google-map-react";

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: "85vh",
    width: "100%",
  },
}));

const Map = () => {
  const classes = useStyles();
  console.log(process.env.REACT_APP_GOOGLE_MAP_API_KEY);
  return (
    <Box className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={{ lat: 32.6074954, lng: 43.941492 }}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
      />
    </Box>
  );
};

export default Map;
