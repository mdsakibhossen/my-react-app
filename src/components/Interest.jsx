import React from 'react'

const Interest = (props) => {
  return (
    <div className="interest">
      <ol>
        {props.interests.map((e) => {
          return <li>{e}</li>;
        })}
      </ol>
    </div>
  );
}

export default Interest