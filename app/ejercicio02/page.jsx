'use client'
import React, { useState } from 'react';

const mensaje = document.createElement('p')
mensaje.id="mensaje"
const Ejercicio02 = () => {
  const [inputValue, setInputValue] = useState(''); // Estado para capturar el valor del cuadro de entrada

  

  const analizar = () => {
    class Automata {
      static matriz = [
        [1,2,5],
        [1,3,5],
        [4,2,5],
        [1,3,5],
        [4,2,5],
        [5,5,5]
      ];
      constructor() {
      }

      inicio(p) {
          mensaje.text=""
          let i = 0;
          const a = /a/i
          const b = /b/i
          const c = p.split('');
          let estado = 0;
          let caracter = 0;

          
          
          while (i < c.length) {
              if (a.test(c[i])) {
                  caracter = 0;
              }   
              else if (b.test(c[i]))
              {
                  caracter = 1
              }
              else caracter = 2
              estado = Automata.matriz[estado][caracter];
              console.log(estado);
              console.log(Automata.matriz[estado][caracter]);
              i++;
          }
          
          if (estado === 1 || estado === 2) {
            console.log("es aceptable");
            mensaje.textContent= "Cadena aceptable"
            mensaje.className="text-green-500 text-xl cursor-pointer"
            
            const ver = document.getElementById('ver')
            if(ver){
              ver.appendChild(mensaje)
            }
          }
          if (estado === 0||estado===3||estado === 4){
            console.log("Error");
            mensaje.textContent= "Cadena Invalida!"
            mensaje.className="text-red-500 text-xl cursor-pointer"
            const ver = document.getElementById('ver')
            if(ver){
              ver.appendChild(mensaje)
            }
          }
          if (estado === 5){
            console.log("Error");
            mensaje.textContent= "Cadena Invalida, simbolo fuera del alfabeto!"
            mensaje.className="text-red-500 text-xl cursor-pointer"
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
  
    return (
      <div>
        <div className='text-center p-7'>
          <input
            className='border-black w-6/12 text-center bg-gray-100 rounded-lg h-10'
            type='text'
            placeholder='Inserta palabra (inicio y terminacion igual)'
            value={inputValue} // Captura el valor del cuadro de entrada
            onChange={(e) => setInputValue(e.target.value)} // Actualiza el estado cuando cambia el cuadro de entrada
          />
        </div>
        <div className='text-center'>
          <button className='bg-zinc-900 text-gray-200 w-40 rounded-lg text-center h-12 button' onClick={analizar}><span>Analiza la entrada</span></button> {/* Llama a la función analizar al hacer clic */}
        </div>
        <div id='ver' className='text-center py-8'></div>
      </div>
    );
}

export default Ejercicio02