import { ReservaContext } from "./reserva";
import { useContext } from "react";

function ReservaDetail() {
  const { selectedReserva } = useContext(ReservaContext);
  
  return (
    <div>
      <h1>detalle reserva</h1>
      <p>
        <strong>ID: {selectedReserva.id}</strong>
      </p>
      <p>
        <strong>USUARIO ID : {selectedReserva.usuario_id}</strong>
      </p>
      <p>
        <strong>FECHA {selectedReserva.fechaReserva}</strong>
      </p>
      <p>
        <strong>LUGAR{selectedReserva.lugar}</strong>
      </p>
      <p>
        <strong>NOMBRE RESERVA{selectedReserva.nombreReserva}</strong>
      </p>
      
    </div>
  );
}
export default ReservaDetail;
