import React, { SyntheticEvent, useState, FC, ReactElement } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

export interface IApp {}

const App: FC<IApp> = (): ReactElement => {
  const [color, setColor] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [list, setList] = useState<Values[]>(new Values("#5025f1").all(10));

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={`kunika ${error ? "error" : null}`}
            value={color}
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit" className="button-85 kunika">
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
