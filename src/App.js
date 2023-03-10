import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#5f8f5f").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setError(false);
      const colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error && "error"}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {!error &&
          list.map((e, index) => {
            return (
              <SingleColor key={index} {...e} index={index} hexColor={e.hex} />
            );
          })}
      </section>
    </>
  );
}

export default App;
