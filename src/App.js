import "./App.scss";
import "./assets/fonts/icofont/icofont.css";
import Main from "./Main";

function App() {
  return (
    <div>
      <div className="App">
        <Main />
      </div>
      <div className="non_phone_warning">
        <h1 className="heading-primary u-text-primary-dark">
          Not made for small devices yet
        </h1>
      </div>
    </div>
  );
}

export default App;
