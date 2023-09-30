import NavBar from "./Components/NavBar"
import SideBar from "./Components/SideBar";
import ProdContainer from "./Components/ProdContainer";


function App() {
  return (
    <div>
     <NavBar/>
      <div className="app-one">
      <SideBar/>
      <ProdContainer/>
      </div>
    </div>
  );
}

export default App;
