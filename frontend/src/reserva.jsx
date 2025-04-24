import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const ReservaContext = createContext();

const useReservaContext = () => useContext(ReservaContext);

function Reserva() {
  const [reserva, setReserva] = useState([]);
  const {selectedReserva, setSelectedReserva}  = useReservaContext();
  const navigate = useNavigate();
  const listUser = async () => {
    try {
      const respuesta = await axios.get("http://localhost:6502/apir/");
      console.log(respuesta);
      setReserva(respuesta.data);
    } catch (e) {
      console.log("ERROR AL OBTENER LOS DATOS", e);
    }
  };
+
  useEffect(() => {
    listUser();
  }, []);

  const selectReserva = (index) => {
    setSelectedReserva(index);
    navigate("/Detallesreserva");
  };

  return (
    <ReservaContext.Provider value={{ selectedReserva, setSelectedReserva }}>
    <div>
      <table>
        <thead>
          <tr>
            <th>fechaReserva </th>
            <th>lugar </th>
            <th>nombreReserva </th>
            <th>usuario_id</th>
          </tr>
        </thead>
        <tbody>
          {reserva.map((reservaItem) => {
            return (
              <tr key={reservaItem.id}>
                <td>{reservaItem.fechaReserva}</td>
                <td>{reservaItem.lugar}</td>
                <td>{reservaItem.nombreReserva}</td>
                <td>{reservaItem.usuario_id}</td>
                <td>
                  <button onClick={() => selectReserva(reservaItem)}>
                    Ver detalles
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </ReservaContext.Provider>
  );
}

export default Reserva;
