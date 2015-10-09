// 'use strict';
// var component = require('./component.js');
// document.body.appendChild(component());

import React from 'react';
import Hello from './component';
import './../style/style.css';

React.render(<Hello />, document.getElementById('app'));