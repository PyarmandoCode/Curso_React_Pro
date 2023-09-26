import React from "react";
import ReactDOM from "react-dom/client";
import BasicExample from "./components/reactboost";
import 'bootstrap/dist/css/bootstrap.min.css';

import Tasks from "./components/task";




const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <>
    <Tasks/>
    </>
)