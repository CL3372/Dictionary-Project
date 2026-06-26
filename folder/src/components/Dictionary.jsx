import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search() {
    let apiKey = "aa9340df384978aa7t1a53a8fabcc2o1";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  useEffect(() => {
    setLoaded(true);
    search();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

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
          />
          <p className="Hint">i.e. sunset, wine, yoga, coding</p>
        </form>
        <Results results={results} />
      </section>
    </div>
  );
}
