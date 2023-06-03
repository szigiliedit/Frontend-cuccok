import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(React.createElement(App), document.getElementById("app-container"));
function App() {
  const [isActive, setActive] = React.useState(true);

  return <div className="border">
    App
    <BoxComponent isActive={isActive}></BoxComponent>
    <ButtonComponent isActive={isActive} setActive={setActive}></ButtonComponent>
    App szintű state: {isActive ? "Aktív" : "Inaktív"}
  </div>;
}

function ButtonComponent({ isActive, setActive }) {
  return <div style={{width: "200px", height: "200px"}} 
  className="p-2 m-5 border rounded">
    <button className="btn btn-success m-2" disabled={isActive} onClick={()=>{
        setActive(true);
    }}>
        Aktiválás
        </button>
        <button className="btn btn-success m-2" disabled={!isActive} onClick={()=>{
        setActive(false);
    }}>
        Deaktiválás
        </button>
  </div>
}
function BoxComponent(props) {
    return (
        <div className="p-2 m-5 rounded" style={{ width: "200px", height: "200px", backgroundColor: props.isActive ? "green":"firebrick"}}>
            {props.isActive ? "Aktív" : "Inaktív"}
        </div>
    );
}
export default App;