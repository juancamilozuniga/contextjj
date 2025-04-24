import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Usuarios from "./Usuarios";
import UserDetail from "./Detalles";
import ReservaDetail from "./DetallesReserva";
import { useState } from "react";
import { UserContext } from "./Usuarios";
import { ReservaContext } from "./reserva";
import Login from "./Login";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedReserva, setSelectedReserva] = useState(null);

  return (
    <ReservaContext.Provider value={{ selectedReserva, setSelectedReserva }}>
      <UserContext.Provider value={{ selectedUser, setSelectedUser }}>
        <Router>
          <Routes>
            <Route path="/" element={<Usuarios />} />
            <Route path="/Detalles" element={<UserDetail />} />
            <Route path="/Detallesreserva" element={<ReservaDetail />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </ReservaContext.Provider>
  );
}

export default App;
