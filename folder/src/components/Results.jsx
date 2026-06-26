import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
    console.log("API Response:", props.results);
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>

          {props.results.phonetics && props.results.phonetics.length > 0 && (
            <div>
              {props.results.phonetics.map(function (phonetic, index) {
                return <Phonetics phonetic={phonetic} key={index} />;
              })}
            </div>
          )}

          {props.results.meanings && props.results.meanings.length > 0 && (
            <div>
              {props.results.meanings.map(function (meaning, index) {
                return <Meaning meaning={meaning} key={index} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
