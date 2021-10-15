import { Header } from './components/Header'
import { Footer } from './components/Footer'

const App = () => {

    let name = "Renan";
    let age = 90;

    return (
        <div>
        <Header name={name} age={age}/>
        
        <button onClick={()=>{alert("clicou")}}>Click aqui</button>
        
        <Footer/>
        </div>
    )
}


export default App;