import { CssBaseline, Grid } from "@material-ui/core";
import { useState } from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import List from "./components/List";

function App() {
  const [type, setType] = useState("restaurant");
  const [loading, setLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);
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
