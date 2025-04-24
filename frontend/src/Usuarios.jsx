import axios from "axios";
import { useEffect, useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Reserva from "./reserva";

export const UserContext = createContext();

const useUserContext = () => useContext(UserContext);


function Usuarios() {
  const [users, setUsers] = useState([]);
  const {selectedUser, setSelectedUser}  = useUserContext();
  const navigate = useNavigate();


  useEffect(() => {
      const listUser = async () => {
        try {
          const respuesta = await axios.get("http://localhost:6502/apiu");
          console.log(respuesta);
          setUsers(respuesta.data);
        } catch (e) {
          console.log("ERROR AL OBTENER LOS DATOS", e);
        }
      };
    listUser();
  }, []);

  const selectUser = (usuario) => {
    setSelectedUser(usuario);
    navigate("/Detalles");
  };

  return (
    <UserContext.Provider value={{ selectedUser, setSelectedUser }}>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>
                  <button onClick={() => selectUser(usuario)}>
                    Ver detalles
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Reserva />
      </div>
    </UserContext.Provider>
  );
}

export default Usuarios;

