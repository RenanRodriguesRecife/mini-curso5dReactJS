import { Header } from './components/Header'
import { Footer } from './components/Footer'

const App = () => {

    let name = "Renan";
    let age = 90;
    
    const handleClick = () => {
        alert("Clicou na função");
    }

    return (
        <div style={{backgroundColor: "#FF0000"}}>
        <Header name={name} age={age}/>
        
        <button onClick={handleClick}>Click aqui</button>
        
        <Footer/>
        </div>
    )
}


export default App;