import React, { useState } from "react";
import Qcard from "./Qcard";
const View = () => {
  const [url, seturl] = useState("");

  const [data, setdata] = useState([]);

  const viewform = async () => {
    const data1 = await fetch(url);
    const newdata = await data1.json();
    console.log(newdata);
    setdata(newdata);
  };

  return (
    <>
      <div className="chead" style={{ border: "none" }}>
        <h2>Enter the url:</h2>
        <input
          type="text"
          className="text1"
          value={url}
          onChange={(e) => {
            seturl(e.target.value);
          }}
          style={{ color: "dodgerblue" }}
        />
        <input
          type="submit"
          value="submit"
          className="button"
          onClick={viewform}
        />
      </div>
      {data.title && (
        <div className="chead">
          <h2>{data.title}</h2>
          <p>{data.desc}</p>
        </div>
      )}
      {data.questions &&
        data.questions.map((ele) => {
          return <Qcard question={ele} key={ele.name} />;
        })}
    </>
  );
};

export default View;
