import React from "https://esm.sh/react@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"

const appDomElement = document.getElementById('app');

const root = ReactDOM.createRoot(appDomElement);

const button = React.createElement('button',{ "data-id": 123},'Click me!');
const button1 = React.createElement('button',{ "data-id": 456},'Click me!');
const button2 = React.createElement('button',{ "data-id": 789},'Click me!');

const app = React.createElement(React.Fragment, null, [button, button1, button2]);

/* JSX equivalent
  <React.Fragment>
    <button data-id={123}>Click me!</button>
    <button data-id={456}>Click me!</button>
    <button data-id={789}>Click me!</button>
  </React.Fragment>
*/

root.render(app);