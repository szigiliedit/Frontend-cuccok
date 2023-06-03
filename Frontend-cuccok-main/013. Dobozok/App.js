// Komponensek és propok
import React from 'react';
import ReactDOM from 'react-dom';
function App() {
  return React.createElement(
    "div",
    {
      className: "border",
    },
    "App",
    React.createElement(BoxComponent, { hatterSzin: "red", felirat: "Első" }),
    React.createElement(BoxComponent, { hatterSzin: "blue", felirat: "Második" }),
    React.createElement(BoxComponent, { hatterSzin: "green", felirat: "Harmadik" })
  );
}

function BoxComponent(props) {
  return React.createElement(
    "div",
    {
      style: {
        width: "200px",
        height: "200px",
        backgroundColor: props.hatterSzin,
      },
      className: "p-2 m-5 rounded",
    },
    props.felirat
  );
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
export default App;