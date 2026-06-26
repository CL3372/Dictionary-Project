import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handlePhotosResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let dictionaryApiKey = "aa9340df384978aa7t1a53a8fabcc2o1";
    let dictionaryApiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${dictionaryApiKey}`;
    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "KyYP1iVI4dmVoXDGjmPtXdtQEYTaijOA96UdRL4hq03g32SmnihAV8Tr";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

    let headers = {
      Authorization: pexelsApiKey,
    };

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePhotosResponse);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={updateKeyword}
              defaultValue={props.defaultKeyword}
              autoFocus={true}
              placeholder="Enter a word..."
            />
          </form>
          <p className="Hint">i.e. sunset, wine, yoga, coding</p>
        </section>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
