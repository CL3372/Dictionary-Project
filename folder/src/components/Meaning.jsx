import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions && props.meaning.definitions.length > 0 && (
        <div>
          <p>
            <strong>Definition:</strong>
          </p>
          <ul>
            {props.meaning.definitions.map(function (definition, index) {
              return <li key={index}>{definition.definition}</li>;
            })}
          </ul>
        </div>
      )}
      {props.meaning.synonyms && props.meaning.synonyms.length > 0 && (
        <div>
          <p>
            <strong>Synonyms:</strong> {props.meaning.synonyms.join(", ")}
          </p>
        </div>
      )}
    </div>
  );
}
