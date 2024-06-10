import React, { useEffect, useState } from "react";
import App from "./src/App";
import Ticket from "./src/pages/Ticket";
function App() {

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<App />} />
            <Route path="ticket">
              <Route index element={<Ticket />} />
              
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
}

export default App;