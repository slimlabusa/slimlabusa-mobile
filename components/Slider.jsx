import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

function Slider(props) {
  // const [values, setValues] = useState([50]);
  const weight = props.weight;

  return (
    <Range
      step={1}
      min={100}
      max={400}
      values={props.weight}
      onChange={(newValues) => props.setWeight(newValues)}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: 8,
            width: "100%",
            background: getTrackBackground({
              values: weight,
              colors: ["#522671", "#ccc"],
              min: 100,
              max: 400,
            }),
            borderRadius: 3,
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: 30,
            width: 30,
            borderRadius: 42,
            backgroundColor: "#522671",
          }}
        />
      )}
    />
  );
}

export default Slider;
