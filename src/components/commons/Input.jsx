import React from 'react';

import '../../css/input.css';

function Input(props) {
  return (
    <div>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className="Input"
      />
    </div>
  );
}
export default Input;
