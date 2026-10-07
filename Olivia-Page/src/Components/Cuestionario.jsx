import React from 'react'

function Cuestionario({ typeQuestion, question, typeInput, nameInput, idInput, placeholderInput, value, onChange }) {
  return (
    <div className='form-group'>
        <label htmlFor={typeQuestion}>{question}</label>
        <input type={typeInput} name={nameInput} id={idInput} placeholder={placeholderInput} value={value} onChange={onChange}/>
    </div>
  )
}

export default Cuestionario