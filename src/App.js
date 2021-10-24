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

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(type).then((data) => {
      setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
      setIsLoading(false);
    });
  }, [type, setPlaces]);

  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid container style={{ width: "100%" }} spacing={0.5}>
        <Grid xs={12} md={4} spa>
          <List
            type={type}
            setType={(type) => setType(type)}
            childClicked={childClicked}
            isLoading={isLoading}
          />
        </Grid>
        <Grid xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
