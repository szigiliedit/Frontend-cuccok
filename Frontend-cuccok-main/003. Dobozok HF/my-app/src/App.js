// Komponensek és propok
import React from 'react';
import ReactDOM from 'react-dom';
function App() {
  return React.createElement(
    "div",
    {
      className: "border",
    },
    "Dobozok",
    React.createElement(BoxComponent, { hatterSzin: "goldenrod", felirat: "1." }),
    React.createElement(BoxComponent, { hatterSzin: "magenta", felirat: "2." }),
    React.createElement(BoxComponent, { hatterSzin: "firebrick", felirat: "3." }),
    React.createElement(BoxComponent, { hatterSzin: "orange", felirat: "4." }),
    React.createElement(BoxComponent, { hatterSzin: "darkgreen", felirat: "5." })
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