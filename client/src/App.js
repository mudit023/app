import "./App.css";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/app" component={Home} />
        <Route exact path="/addProduct" component={AddProduct} />
      </Switch>
    </>
  );
}

export default App;
