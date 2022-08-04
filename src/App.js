import "./App.scss";
import DataSections from "./DataSections/DataSections";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="container">
        <DataSections />
      </section>
    </div>
  );
}

export default App;
