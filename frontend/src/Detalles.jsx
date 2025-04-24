import { UserContext } from "./Usuarios";
import { useContext } from "react";

function UserDetail() {
  const { selectedUser } = useContext(UserContext);
  return (
    <div>
      <h1>detalle usuarios</h1>
      <p>
        <strong>{selectedUser.id}</strong>
      </p>
      <p>
        <strong>{selectedUser.nombre}</strong>
      </p>
    </div>
  );
}
export default UserDetail;
