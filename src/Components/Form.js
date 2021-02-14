import React from "react";

function Form() {
  return (
    <>
      <div className="form">
        <h1 className="is-size-1 has-text-weight-bold head">Meme Stream</h1>
        <div className="field">
          <label className="label">Meme Owner</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Caption</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Be creative with the caption"
            />
          </div>
        </div>
        <label className="label">Meme URL</label>
        <div className="field has-addons">
          <input
            className="input"
            type="url"
            placeholder="Enter URL of your meme here"
          />
          <div className="control">
            <a className="button has-background-info has-text-white" href="/">
              Submit Meme
            </a>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default Form;
