import React, { Component, useState } from 'react';
import '../styles/App.css';
​
const App = () => {
  return (
    <div id="main">
      <div data-ns-test="project-name">Amazon</div>
      <div data-ns-test="project-description">Ecommerce</div>
​
      <div data-ns-test="project-name">Google</div>
      <div data-ns-test="project-description">Search Engine</div>
    </div>
  );
};
​
export default App;
Collapse





Arfat Salman  11:14 PM
Second Assignment Solution
11:14
Add this to index.js
ReactDOM.render(
  <App />,
  document.getElementById('root')
);


Arfat Salman  11:15 PM
The App.js file should have this.
import React, { Component, useState } from 'react';
import '../styles/App.css';

//! App is the name of component as per the test
const App = () => {
  return (
    <p>
      Now I can render any React component on any DOM node I want using
      ReactDOM.render
    </p>
  );
};

//! Needed so that `index.js` can do `import App from './App.js'`
export default App;
