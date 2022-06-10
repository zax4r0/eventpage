import React from 'react';

function Button({ children, className, ...restProps }: any) {
  return (
    <button className={`${className} common-button select-none`} {...restProps}>
      {children}
    </button>
  );
}
export default Button;
