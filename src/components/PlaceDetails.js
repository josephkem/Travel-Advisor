import { Card, CardMedia } from "@material-ui/core";
import React from "react";

const PlaceDetails = ({ place }) => {
  return (
    <div>
      <Card elevation={8}>
        <CardMedia
          style={{ height: 350 }}
          image={place.photo ? place.photo.images.large.url : null}
          title={place.name}
        ></CardMedia>
      </Card>
    </div>
  );
};

export default PlaceDetails;
