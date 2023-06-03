//import { function } from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(React.createElement(App), document.getElementById("root"));
function App() {
  const [isActive, setActive] = React.useState(1);
  return React.createElement(
    "div",
    {
      className: "border"
    },
    "App",
    React.createElement(BoxComponent, { isActive: isActive }),
    React.createElement(ButtonComponent, { isActive: isActive, setActive: setActive }),
    React.createElement(ButtonComponent2, { isActive: isActive, setActive: setActive }),
  );
}
function ButtonComponent({ isActive, setActive }) {
  return React.createElement('div', {
    style: {
      width: "170px",
      height: "70px",
    },
    className: "p-2 m-5 border rounded"
  },
    React.createElement(
      "button",
      {
        className: "btn btn-success m-2",
        disabled: !isActive,
        onClick: () => {
          setActive(1);
        }
      },
      "Zöld"
    ),
    React.createElement(
      "button",
      {
        className: "btn btn-danger m-2",
        disabled: !isActive,
        onClick: () => {
          setActive(2);
        }
      },
      "Piros"
    )
  );
}

function ButtonComponent2({ isActive, setActive }) {
  return React.createElement('div', {
    style: {
      width: "170px",
      height: "70px",
    },
    className: "p-2 m-5 border rounded"
  },
    React.createElement(
      "button",
      {
        className: "btn btn-warning m-2",
        disabled: !isActive,
        onClick: () => {
          setActive(3);
        }
      },
      "Sárga"
    ),
    React.createElement(
      "button",
      {
        className: "btn btn-primary m-2",
        disabled: !isActive,
        onClick: () => {
          setActive(4);
        }
      },
      "Kék"
    )
  );
}

function BoxComponent(props) {
  return React.createElement(
    "div",
    {
      style: {
        width: "200px",
        height: "200px",
        backgroundColor: props.isActive === 1 ? "green" : props.isActive === 2 ? "red" : props.isActive === 3 ? "yellow" : props.isActive === 4 ? "blue" : props,
      },
      className: "p-2 m-5 rounded",
    },
  );
}

export default App;