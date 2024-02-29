
import { BrowserRouter} from "react-router-dom"
import { Navbar ,Hero , About,Contact ,Footer ,Invader} from "./components";
import Business from "./components/Business";
import Pauserequest from "./components/Pauserequest";


function App() {
  return (
    <div className="App mb-0">
      <BrowserRouter>
       <div className="relative z-0 bg-white">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Business />
        <Pauserequest />
        <Invader />
      </div>
      <div className="bg-white relative z-0">
          <Contact />

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
