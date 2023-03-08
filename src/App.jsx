//import './App.css'
import Header from './assets/components/Header'
import Form from './assets/components/Form'
import Pedido from './assets/components/Pedido'
import { useState } from 'react'

const pedidos = [
  {id: 1, name: 'hamburguesa'},
  {id: 2, name: 'pizza'},
  {id: 3, name: 'papas'},
  {id: 4, name: 'ensalada'},
]

let id = 0;

function App() {

  const [pedidos, setPedidos] = useState([])

  function handleAddPedido(pedido) {
    //console.log(pedido);
    const newPedidos = [...pedidos]
    newPedidos.push({
      id: id++,
      name: pedido
    })
    console.log(newPedidos);
    setPedidos(newPedidos)    
  }

  function handleDeletePedido(id) {
    const newPedidos = pedidos.filter((pedido)=> pedido.id !== id)
    setPedidos(newPedidos)
  }

  return (
    <div className='app'>
      <Header title = 'Pedi3 Ya'/>
      <Form onAgregar={handleAddPedido}/>
      {/* {onAgregar pero se puede llamar onSubmit tb, es distinto al onSubmit de Formulario} */}
      <hr />
      {pedidos.map((pedido) =>{
        return <Pedido key={pedido.id} pedido={pedido} onDelete={handleDeletePedido} />
      })}
      {/* <Pedido pedido = {pedidos[0]}/> */}
    </div>
  )
}

export default App
