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
    getPlacesData(type);
  }, [type]);
  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid container style={{ width: "100%" }}>
        <Grid xs={12} md={4}>
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
