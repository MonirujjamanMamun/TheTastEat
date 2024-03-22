import React from 'react';

const Button = ({ title, links = null }) => {
  return (
    <div>
      <button>
        <a href={links} class="transparent-button w-button">
          {title}
        </a>
      </button>
    </div>
  );
};

export default Button;
