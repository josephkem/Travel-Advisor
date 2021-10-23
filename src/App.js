import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header";
import Map from "./components/Map";
import List from "./components/List";

function App() {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid container style={{ width: "100%" }}>
        <Grid xs={12} md={4}>
          <List />
        </Grid>
        <Grid xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
