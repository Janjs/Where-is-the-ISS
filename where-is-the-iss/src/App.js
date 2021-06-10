import './App.css';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { useWindowDimensions } from "./dimensions.js"
import React, { useEffect, useState } from "react";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


const App = () => {
  const [issLoc, setIssLoc] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://api.open-notify.org/iss-now.json")
      .then((response) => response.json())
      .then((json) => setIssLoc(json.iss_position))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  console.log(issLoc)

  const { height, width } = useWindowDimensions();
  return (
    <div style={style.container} className="App">
      <h1 style={style.title}>Here is where the ISS 🛰️ is flying over</h1>
      {!isLoading && (
        <div>
          <ComposableMap width={width} height={height - 100}>
            <Geographies geography={geoUrl} style={style.map}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} />
                ))
              }
            </Geographies>
            <Marker coordinates={[issLoc.longitude, issLoc.latitude]}>
              <text textAnchor="middle" fontSize={16}>
                🛰️
              </text>
            </Marker>
          </ComposableMap>
        </div>
      )}
    </div>
  );
}

const style = {
  container: {
    margin: 0,
  },
  title: {
    color: "#ffffff",
    marginBottom: 0,
  },
  map: {
    fill: "#0b3d91",
  }
};

export default App;
