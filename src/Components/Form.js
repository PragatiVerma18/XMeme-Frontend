import React, { useReducer, useState, useEffect } from "react";
import axios from "axios";
import Memes from "./Memes";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

function Form() {
  const [name, setName] = useState("");
  const [caption, setCaption] = useState("");
  const [url, setUrl] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [memesData, setMemesData] = useState([]);
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    if (name && caption && url) {
      setIsDisabled(true);

      await axios.post("https://xmeme-django.herokuapp.com/memes", {
        name,
        caption,
        url,
      });

      setIsDisabled(false);
      window.location.reload();
    }
  };

  const getMemesData = async () => {
    const data = await axios.get("https://xmeme-django.herokuapp.com/memes");
    console.log(data.data);
    setMemesData(data.data);
  };

  useEffect(() => {
    getMemesData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <>
      <form className="form" onSubmit={submitForm}>
        <h1 className="is-size-1 has-text-weight-bold head">Meme Stream</h1>
        {submitting && (
          <div className="is-size-5 has-text-weight-bold has-text-success content">
            You are submitting the following:
            <ul>
              {Object.entries(formData).map(([name, value]) => (
                <li key={name}>
                  <strong>{name}</strong>
                  {value.toString()}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="field">
          <label className="label">Meme Owner</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          </div>
        </div>
        <label className="label">Meme URL</label>
        <div className="field has-addons">
          <input
            className="input"
            type="url"
            placeholder="Enter URL of your meme here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <div className="control">
            <button
              className="button has-background-info has-text-white"
              type="submit"
              disabled={isDisabled}
            >
              Submit Meme
            </button>
          </div>
        </div>
      </form>
      <hr></hr>
      <div className="mt-6 justify-center flex flex-wrap">
        {memesData.length ? (
          memesData.map((meme) => <Memes key={meme.id} data={meme} />)
        ) : (
          <h1 className="text-3xl mt-6 text-gray-800 m-auto">
            No Memes available!
          </h1>
        )}
      </div>
    </>
  );
}

export default Form;
