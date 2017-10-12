import React from 'react';
import { render } from 'react-dom';

export default element => {
  element && render(<button>React Button</button>, element);
};
