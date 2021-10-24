import { CssBaseline, Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import List from "./components/List";
import { getPlacesData } from "./api/travelAdvisorAPI";

function App() {
  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(type).then((data) => {
      setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
      setIsLoading(false);
    });
  }, [type, setPlaces]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid container style={{ width: "100%", paddingTop: 10 }}>
        <Grid xs={12} md={4} spa>
          <List
            type={type}
            setType={(type) => setType(type)}
            childClicked={childClicked}
            isLoading={isLoading}
            places={places}
          />
        </Grid>
        <Grid xs={12} md={8}>
          <Map
            places={places}
            coords={coords}
            setBounds={(bounds) => setBounds(bounds)}
            setCoords={(coords) => setCoords(coords)}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
