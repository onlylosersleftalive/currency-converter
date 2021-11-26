import "./App.css";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Currency Converter</h1>
        <Form />
      </div>
      <p className="link">
        Created by{" "}
        <a
          href="https://github.com/onlylosersleftalive"
          target="_blank"
          rel="noreferrer"
        >
          Sveta M.
        </a>
      </p>
    </div>
  );
};

export default App;
