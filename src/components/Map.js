import React from "react";
import { makeStyles, Box, Typography, Paper } from "@material-ui/core";
import GoogleMapReact from "google-map-react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import globe from "../images/globe.jpg";
import { Rating } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: "85vh",
    width: "100%",
  },
  paper: {
    width: 100,
    display: "flex",
    justifyContent: "center",
    padding: 7,
    flexDirection: "column",
  },
  cardImage: {
    height: 80,
    width: 80,
    cursor: "pointer",
  },
}));

const Map = ({ places, coords, setBounds, setCoords, setChildClicked }) => {
  const classes = useStyles();
  return (
    <Box className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
        onChange={(e) => {
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          setCoords({ lat: e.center.lat, lng: e.center.lng });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places.length > 0 &&
          places.map((place, index) => (
            <div lat={place.latitude} lng={place.longitude} key={index}>
              <LocationOnOutlinedIcon color="secondary" fontSize="medium" />
              <Paper className={classes.paper}>
                <Typography className={classes.typography}>
                  {place.name}
                </Typography>

                <Rating
                  readOnly
                  name="read-only"
                  size="small"
                  value={Number(place.rating)}
                />
              </Paper>
            </div>
          ))}
      </GoogleMapReact>
    </Box>
  );
};

export default Map;
