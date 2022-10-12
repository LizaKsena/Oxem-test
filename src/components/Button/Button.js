import React from 'react';
import './Button.scss';

function Button({ disabled }) {
  return (
    <div>

      <button
        className="form__submit"
        type="submit"
        disabled={disabled}
      >
        Оставить заявку
      </button>
    </div>

  );
}

export default Button;
