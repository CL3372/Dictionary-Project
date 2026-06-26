import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

export default function Results(props) {
  if (!props.results) {
    return null;
  }

  return (
    <div className="Results">
      <section>
        <h2>{props.results.word}</h2>
        <p>{props.results.phonetic}</p>
      </section>

      {props.results.meanings.map(function (meaning, index) {
        return <Meaning meaning={meaning} key={index} />;
      })}
    </div>
  );
}
