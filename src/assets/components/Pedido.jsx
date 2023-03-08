import React from "react";

const Pedido = (props) => {

  function handleDelete() {
    props.onDelete(props.pedido.id)   
  }

  return (
    <div>
      <span> {props.pedido.name}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Pedido;
