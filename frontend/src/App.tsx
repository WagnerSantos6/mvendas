import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SalesCard from "./components/SalesCard/Index";
import Header from "./components/Header/Index";


function App() {
  return (
    <>
    <ToastContainer />
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
