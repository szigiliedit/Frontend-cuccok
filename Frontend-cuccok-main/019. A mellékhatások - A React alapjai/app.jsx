function App() {
    const [clickCount, setClickCount] = React.useState(0);
  
    React.useEffect(() => {
      document.title = "Kattintások száma: " + clickCount;
    }, [clickCount]);
  
    return (
      <div className="card w-25">
        Kattintások száma: {clickCount}
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            setClickCount((elozo) => elozo + 2);
          }}
        >
          Kattints
        </button>
      </div>
    );
  }
  
  ReactDOM.render(React.createElement(App), document.getElementById("root"));
  