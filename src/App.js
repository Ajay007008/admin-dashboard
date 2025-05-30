
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home.jsx"
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New"

import "../src/style/dark.scss";


import { productInputs, userInputs } from "./formSource.js";

import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext.js";

function App() {

const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark" : "app"}> 
         <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<Home/>} />
                <Route path="login" element={<Login/>}/>
                

                 {/* Users Routes */}
                <Route path="users">
                    <Route index element={<List/>}/>
                    <Route path=":userId" element={<Single/>}/>
                    <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
                </Route>
  
                  {/* Products Routes */}
                <Route path="products">
                    <Route index element={<List/>}/>
                    <Route path=":productId" element={<Single/>}/>
                    <Route path="new" element={<New inputs= {productInputs} title="Add New Product"/>}/>
                </Route>


            </Route>
        </Routes>
  </BrowserRouter>
     
    </div>

    
  );
}

export default App;
