import {useState} from 'react'
import Cuestionario from '../Components/Cuestionario'

//array de datos para que el quizz se llene con los inputs sin tener que llamar más de una vez al componente
const quizzInputs = [
   { id: 1,
    typeQuestion: 'oliviasName',
    question: '¿Cuál es el nombre completo de Olivia?',
    typeInput: 'text',
    nameInput: 'oliviasName',
    idInput: 'oliviasName',
    placeholderInput: 'Olivia...'
},
{ id: 2,
    typeQuestion: 'oliviasBirth',
    question: '¿En qué año nació Olivia?',
    typeInput: 'number',
    nameInput: 'oliviasBirth',
    idInput: 'oliviasBirth',
    placeholderInput: '20...'
},
{id: 3,
    typeQuestion: 'oliviasCountry',
    question: '¿En qué país nació Olivia?',
    typeInput: 'text',
    nameInput: 'oliviasCountry',
    idInput: 'oliviasCountry',
    placeholderInput: '...'

},

  
]
//función que renderiza el quizz y maneja los estados de los inputs
function Quizz() {
    const [answers, setAnswers] = useState({
        oliviasName: '',
        oliviasBirth: '',
        oliviasCountry: '',
    });

   const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers({
      ...answers,
      [name]: value
    });
    };
const handleSubmit = (e) => {
    e.preventDefault();
    console.log( 'answers of the Quizz', answers);
}
  return (
    
    <div>
    <h1 className='page-title'>¿Cuánto sabes de Olivia?</h1>
    <p>¡ATENCIÓN! Esta sección es únicamente para verdaderos fans... ¿Te animas a intentarlo?</p>
    {/*sección del quizz, que se llena con el array de datos*/}
    <form onSubmit={handleSubmit} className='quizz-form'>
        {quizzInputs.map((input) => (
            <Cuestionario
                key={input.id}
                typeQuestion={input.typeQuestion}
                question={input.question}
                typeInput={input.typeInput}
                nameInput={input.nameInput}
                idInput={input.idInput}
                placeholderInput={input.placeholderInput}
                value={answers[input.nameInput]}
                onChange={handleChange}
            />
        ))}
        <div className="botones"> <button className="btn btn-primary" type="reset">Vaciar</button>
          <button className="btn btn-secondary" type="submit">Enviar</button></div>
    </form>   

    </div>
  )
}

export default Quizz