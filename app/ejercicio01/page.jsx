'use client'
import React, { useState } from 'react';


const mensaje = document.createElement('p')
mensaje.id="mensaje"
const Ejercicio01 = () => {
  const [inputValue, setInputValue] = useState(''); // Estado para capturar el valor del cuadro de entrada

  const analizar = () => {
    class Automata {
      static matriz = [
        [1, 2, 2],
        [1, 1, 2],
        [2,2,2]
      ];
      
      constructor() {

      }
      
      inicio(p) {
        mensaje.textContent=""
        let i = 0;
        const c = p.split('');
        let estado = 0;
        let caracter = 0;

        while (i < c.length) {
          if (/[a-zA-Z]/.test(c[i])) caracter = 0;
          else if (/[0-9]/.test(c[i])) caracter = 1;
          else caracter = 2;
          console.log(estado);
          estado = Automata.matriz[estado][caracter];
          
          i++;
        }

        if (estado === 1) {
          console.log("es uno");
          mensaje.textContent= "Identificador Valido"
          mensaje.className="text-green-500 text-xl cursor-pointer"
          const ver = document.getElementById('ver')
          if(ver){
            ver.appendChild(mensaje)
          }
          
          console.log(p);
        }
        if (estado === 2) {
          console.log("es 0");
          mensaje.textContent= "Identificador Invalido "
          mensaje.className = "text-red-900 text-xl cursor-pointer "
          mensaje.onClick="{borrar}"
          const ver = document.getElementById('ver')
          if(ver){
            ver.appendChild(mensaje)
          }
        }
        mensaje.addEventListener("click", function(){
          mensaje.textContent=""
          setInputValue('');
        })
        
      }
    }

    const obj = new Automata();
    obj.inicio(inputValue); // Pasar el valor del cuadro de entrada a la función de análisis
  };
  const borrar = ()=>{

  };

  return (
    <div>
      <div className='text-center p-7'>
        <input
          className='border-black w-6/12 text-center bg-gray-100 rounded-lg h-10'
          type='text'
          placeholder='Escribe un identificador'
          value={inputValue} // Captura el valor del cuadro de entrada
          onChange={(e) => setInputValue(e.target.value)} // Actualiza el estado cuando cambia el cuadro de entrada
        />
      </div>
      <div className='text-center'>
        <button className=' text-gray-200 w-40 rounded-lg text-center h-12 button' onClick={analizar}><span>Analiza la entrada</span></button> {/* Llama a la función analizar al hacer clic */}
      </div>
      <div id='ver' className='text-center py-5 -'></div>
    </div>
  );
}

export default Ejercicio01;
