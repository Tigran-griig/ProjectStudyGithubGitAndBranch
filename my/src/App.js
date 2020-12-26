import React from 'react'
import {Auth} from "./pages";
import {Route} from "react-router-dom";


function App() {
  return (
    <div className="wrapper">
        <Route
            exact
            path={["/signin", "/signup", "/signup/verify"]}
            component={Auth}
        />
    </div>
  );
}


export default App;
