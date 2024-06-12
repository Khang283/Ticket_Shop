import React, { useEffect, useState } from "react";
import App from "./src/App";
import Ticket from "./src/pages/Ticket";
import UserContent from "./src/pages/UserProfile/UserProf";
import { Route } from "react-router-dom";
function App() {

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<App />} />
            <Route path="ticket">
              <Route index element={<Ticket />} />
            </Route>

            <Route path="user"> 
              <Route index element={<UserContent/>}/>
            </Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
}

export default App;