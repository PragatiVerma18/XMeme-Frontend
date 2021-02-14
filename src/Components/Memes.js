import React from "react";

function Memes({ data }) {
  return (
    <>
      <div
        className="box"
        style={{
          width: 400,
          margin: "20px",
          padding: "20px",
        }}
      >
        <p className="is-size-5 has-text-weight-bold">{data.name}</p>
        <div className="has-text-weight-semibold">
          <p>{data.caption}</p>
        </div>
        <div className="flex justify-center relative">
          <img src={data.url} alt="Meme" />
        </div>
      </div>
    </>
  );
}

export default Memes;
