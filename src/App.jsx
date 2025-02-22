import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Body from "./Componenets/Body";
import Home from "./Componenets/Home";
import Login from "./Componenets/Login";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      
      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>

  )
}

export default App
