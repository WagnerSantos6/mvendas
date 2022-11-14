import SalesCard from "./components/SalesCard/Index";
import Header from "./components/Header/Index";


function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="vendasmeta-container">
            <SalesCard/>
          </div>
        </section>
      </main>

    </>
  )
}

export default App;
