import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import GoogleMapReact from "google-map-react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: "85vh",
    width: "100%",
  },
}));

const Map = ({ places }) => {
  const classes = useStyles();
  return (
    <Box className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={{ lat: 32.6074954, lng: 43.941492 }}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
      >
        {places.length > 0 &&
          places.map((place, index) => (
            <div lat={place.latitude} lng={place.longitude} key={index}>
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            </div>
          ))}
      </GoogleMapReact>
    </Box>
  );
};

export default Map;
