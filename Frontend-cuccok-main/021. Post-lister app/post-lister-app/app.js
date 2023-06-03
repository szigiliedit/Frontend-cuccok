"use strict";

function App() {
  const [items, setItems] = React.useState([]);
  const [tipus, setTipus] = React.useState("comments");
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/" + tipus).then(res => res.ok ? res.json() : []).then(tartalom => {
      setItems(tartalom);
    });
  }, [tipus]);
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row m-5 border p-5"
  }, /*#__PURE__*/React.createElement(FormKomponens, {
    setTipus: setTipus
  }), /*#__PURE__*/React.createElement(ListaKomponens, {
    elemek: items
  })));
}

const FormKomponens = ({
  setTipus
}) => /*#__PURE__*/React.createElement("form", {
  className: "w-100",
  onSubmit: event => {
    event.preventDefault();
    setTipus(event.target.elements.contentType.value);
  }
}, /*#__PURE__*/React.createElement("select", {
  name: "contentType",
  className: "form-control mb-2"
}, /*#__PURE__*/React.createElement("option", {
  value: "comments"
}, "Kommentek"), /*#__PURE__*/React.createElement("option", {
  value: "posts"
}, "Posztok")), /*#__PURE__*/React.createElement("button", {
  className: "btn btn-primary mb-2",
  type: "submit"
}, "Kiv\xE1laszt"));

const ListaKomponens = ({
  elemek
}) => /*#__PURE__*/React.createElement("ul", null, elemek.map(elem => /*#__PURE__*/React.createElement("li", {
  key: elem.id,
  className: "list-group-item"
}, elem.body)));

ReactDOM.render(React.createElement(App), document.getElementById("app-container"));