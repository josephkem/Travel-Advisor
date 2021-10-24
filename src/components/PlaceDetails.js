import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";

const PlaceDetails = ({ place }) => {
  return (
    <div>
      <Card elevation={8}>
        <CardMedia
          style={{ height: 350 }}
          image={place.photo ? place.photo.images.large.url : null}
          title={place.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {place.name}
          </Typography>
          <Box display="flex" justifyContent="space-between" my={2}>
            <Rating name="read-only" value={Number(place.rating)} readOnly />
            <Typography>
              {place.num_reviews} review{place.num_reviews > 1 && "s"}
            </Typography>
          </Box>
          <Typography>
            {place.address && (
              <Typography
                gutterBottom
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <LocationOnIcon />
                {place.address}
              </Typography>
            )}
            {place.phone && (
              <Typography
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <PhoneIcon />
                {place.phone}
              </Typography>
            )}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlaceDetails;
