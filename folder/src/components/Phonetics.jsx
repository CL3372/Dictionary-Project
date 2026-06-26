import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {props.phonetic.text && <p>{props.phonetic.text}</p>}
      {props.phonetic.audio && (
        <audio controls>
          <source src={props.phonetic.audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}
