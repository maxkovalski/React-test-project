import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import MainRouter from './router.js';


render(
	<MainRouter />,
  document.getElementById('root')
)


