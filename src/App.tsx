import React, { SyntheticEvent, useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

const App = () => {
  const [color, setColor] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [list, setList] = useState<Values[]>(new Values("#f15025").all(10));

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log("🚀 ~ file: ~ ", colors);
    } catch (error) {
      setError(true);
      console.log("🚀 ~ file: ~ ", error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={`${error ? "error" : null}`}
            value={color}
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          console.log(color);
          return (
            <SingleColor
              key={index}
              {...color}
              hexColor={color.hex}
              index={index}
            />
          );
        })}
      </section>
    </>
  );
};

export default App;
