import React from "react";

function Memes({ data }) {
  return (
    <>
      <div className="container">
        <div className="block">
          <div
            className="relative bg-white rounded-md shadow-md hover:shadow-lg m-6"
            style={{ width: 300 }}
          >
            <div className="flex justify-center relative">
              <img src={data.url} alt="Meme" />
            </div>
            <p className="mt-1 font-medium uppercase text-center text-sm">
              {data.name}
            </p>
            <div className="rounded-b-md bg-gray-800 text-white p-2 flex justify-between items-center">
              <p className="text-sm">{data.caption}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Memes;
