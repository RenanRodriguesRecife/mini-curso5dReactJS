import { useState } from 'react';
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const App = () => {

    let name = "Renan";
    let age = 90;

    const [bg, setBg] = useState("#FF0000")
    
    const handleClick = () => {
        setBg('#0000FF')
    }

    return (
        <div style={{backgroundColor: bg}}>
        <Header name={name} age={age}/>
        
        <button onClick={handleClick}>Click aqui</button>
        
        <Footer/>
        </div>
    )
}


export default App;