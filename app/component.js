// 'use strict';

// module.exports = function () {
//     var element = document.createElement('h1');

//     element.innerHTML = 'Hi world';

//     return element;
// };

import React from 'react';

export default class Hello extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}