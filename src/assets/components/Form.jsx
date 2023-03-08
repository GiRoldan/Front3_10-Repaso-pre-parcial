import React, { useState } from 'react'
import Card from './Card'

const Form = (props) => {
    const[inputValue, setInputValue] = useState('')

    function handleChange(event){
      const cleanValue = event.target.value.trim()
      //para eliminar los espacios en blanco del principio y del final
      //console.log(event);
      //aca podemos ver todas las propiedades de event, una de ellas es target, q tiene una q es value
      if(/[^a-zA-Z]/.test(cleanValue)) return
      //validacion RegExp para texto
      //console.log(event.target.value + " Clean:" + cleanValue);
      //nos imprime por consola el valor de target
      setInputValue(cleanValue)
      //a setInput le paso el valor nuevo q quiero que tome, puedo ponerle lo que quiera
    }

    function handleSubmit(event){
        event.preventDefault() //para q cdo haga click no me recargue toda la pagina
        if(!inputValue){
          console.error('No se puede enviar un valor vacío');
          return
        }
        console.log('enviando...', inputValue);
        props.onAgregar(inputValue)
    }

  return (
    <Card title='miCard' clasName='card'>
      <form onSubmit={handleSubmit}>
        <input type="text" value = {inputValue} onChange={handleChange}/>
        <button type='submit'>Agregar</button>
      </form>
    </Card>
  )
}

export default Form
