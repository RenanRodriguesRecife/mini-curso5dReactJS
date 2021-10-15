import { useState } from 'react';
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const App = () => {

    const [name, setName] = useState("Renan");
    const [age, setAge] = useState(90);
    const [bg, setBg] = useState("#FF0000")
    
    const [list, setList] = useState([
        "O rato roeu a roupa do rei de roma",
        "aqui vai uma frase poética",
        "a inspiração desse programador é pouca"
    ]);


    const handleClick20 = () => {
        setAge(20)
        setBg('#0000FF')
    }

    const handleClick90 = () => {
        setAge(90)
        setBg('#FF0000')
    }

    return (
        <div style={{backgroundColor: bg}}>
        <Header name={name} age={age}/>
        

        {age === 90 && 
        <button onClick={handleClick20}>Click aqui</button>
        }
        {age === 20 &&
        <button onClick={handleClick90}>Click aqui</button>
        }
        <hr/>
        <ul>
            {list.map((frase,index)=>(
                <li key={index}>{frase}</li>
            ))}
        </ul>

        <Footer/>
        </div>
    )
}


export default App;