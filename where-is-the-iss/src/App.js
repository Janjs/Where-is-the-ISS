import "./App.css";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
require("dotenv").config();

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const App = () => {
  const [issLoc, setIssLoc] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [tooltipContent, setTooltipContent] = useState("");
  const [formattedAddress, setFormattedAddress] = useState("");

  useEffect(() => {
    fetch("https://api.wheretheiss.at/v1/satellites/25544")
      .then((response) => response.json())
      .then((json) => {
        setIssLoc(json);
        console.log(
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            json.latitude +
            "," +
            json.longitude +
            "&key=" +
            process.env.REACT_APP_GOOGLE_MAPS_API_KEY
        );
        fetch(
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            json.latitude
          + "," +
            json.longitude 
          + "&key=" +
            process.env.REACT_APP_GOOGLE_MAPS_API_KEY
        )
          .then((response) => response.json())
          .then((json) => {
            if(json.results.length === 0){
              setFormattedAddress("prob in the ocean");
            } else {
              setFormattedAddress(json.results[0].formatted_address);
            }
          });
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  console.log(formattedAddress);

  return (
    <div style={style.container} className="App">
      <h1 style={style.title}>Here is where the ISS 🛰️ is flying over</h1>
      {!isLoading && (
        <div>
          <ComposableMap data-tip="">
            <Geographies geography={geoUrl} style={style.map} width={500}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} />
                ))
              }
            </Geographies>
            <Marker
              coordinates={[issLoc.longitude, issLoc.latitude]}
              onMouseEnter={() => {
                setTooltipContent(formattedAddress);
              }}
              onMouseLeave={() => {
                setTooltipContent("");
              }}
            >
              <text textAnchor="middle" fontSize={16}>
                🛰️
              </text>
            </Marker>
          </ComposableMap>
          <ReactTooltip>{tooltipContent}</ReactTooltip>
        </div>
      )}
    </div>
  );
};

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
  },
};

export default App;
