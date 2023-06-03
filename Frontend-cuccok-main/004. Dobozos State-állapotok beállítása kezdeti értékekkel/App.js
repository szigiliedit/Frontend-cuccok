// Komponensek és propok
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(React.createElement(App), document.getElementById("root"));
  function App() {
    return React.createElement(
      "div",
      {
        className: "border",
      },
      "App",
      React.createElement(BoxComponent, { hatterSzin: "red" }),
      React.createElement(BoxComponent, { hatterSzin: "blue" }),
      React.createElement(BoxComponent, { hatterSzin: "green" })
    );
  }
  
  function BoxComponent(props) {
    const [szamlaloAllapota, ujSzamlaloAllapotBeallitasa] = React.useState();
    return React.createElement(
      "div",
      {
        style: {
          width: "200px",
          height: "200px",
          backgroundColor: props.hatterSzin,
        },
        className: "p-2 m-5 rounded",
        onClick: () => {
          ujSzamlaloAllapotBeallitasa("teszt")
        }
      },
      React.createElement("h1", {}, szamlaloAllapota)
    );
  }
  
export default App;