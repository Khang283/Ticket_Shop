import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./src/App";
import Ticket from "./src/pages/Ticket";
import UserContent from "./src/pages/UserProfile/UserProf";
import { Route } from "react-router-dom";
import BookingPreview from "./src/pages/Booking/BookingPreview";
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
            
            <Route path="booking"> 
              <Route index element={<BookingPreview/>}/>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
}

export default App;