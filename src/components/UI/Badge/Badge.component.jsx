import React from 'react';

import './Badge.styles.css'

export default function componentName( { children } ) {
  return (
    <span className="badge">
        { children }
    </span>
  );
}
