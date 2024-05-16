import { useState } from "react";


function Calculadora(){

    const[numero, setNumero] = useState(0)
    const somar = () =>{
        setNumero(numero+1)
    }

    const [numero1, setNumero1] = useState(0) 
    const [numero2, setNumero2] = useState(0) 
    const [resultado, setResultado] = useState(0) 

    const soma = ()=>{
        setResultado(numero1+numero2)}

    const multiplicar = ()=>{
        setResultado(numero1*numero2)}
            
    const dividir = ()=>{
        setResultado(numero1/numero2)}

    const subtrair = ()=>{
        setResultado(numero1-numero2)}

    return( 
        <div>           
            <h1>Calculadora</h1>
            <label>Número</label>
            <input type="text" 
            onChange={e=>{setNumero(
                parseInt(e.target.value))}}
            value={numero}/>
                	
            <br/>
            <button onClick={somar}>Somar+1</button> 
            <h2>{numero}</h2>


        <h1>Operações da Calculadora</h1>
            <label>Número 1</label>
            <input type="text" 
            onChange={e=>{setNumero1(
                parseInt(e.target.value))}}
            value={numero1}/>
            <br></br>
            <label>Número 2</label>
            <input type="text" 
            onChange={e=>{setNumero2(
                parseInt(e.target.value))}}
            value={numero2}/>
            <br></br>

            <button onClick={soma}>Somar</button>
            <button onClick={subtrair}>Subtrair</button> 
            <button onClick={dividir}>Divisão</button> 
            <button onClick={multiplicar}>Multiplicar</button> 
<br></br>
            <label>Resultado</label>
            <h2>{resultado}</h2>
        </div>
    )
}

export default Calculadora;