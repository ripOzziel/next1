'use client'
import React, { useState } from 'react';
const mensaje = document.createElement('p')
mensaje.id="mensaje"
const ejercicio04 = () => {
    const [inputValue, setInputValue] = useState(''); // Estado para capturar el valor del cuadro de entrada

    const analizar = () => {
      class Automata {
        static matriz = [
          [1,2,3],
          [1,1,3],
          [2,2,3],
          [3,3,3]
        ];
        constructor() {}
  
        inicio(p) {
            mensaje.textContent=""
            let i = 0;
            const reg0 = /0/i
            const reg1 = /1/i
            const c = p.split('');
            let estado = 0;
            let caracter = 0;
            
            while (i < c.length) {
                if (reg0.test(c[i])) {
                    caracter = 0;
                }   
                else if (reg1.test(c[i]))
                {
                    caracter = 1
                }
                else caracter = 2
                estado = Automata.matriz[estado][caracter];
                console.log(estado);
                console.log(Automata.matriz[estado][caracter]);
                i++;
            }
            
            if (estado === 1) {
              console.log("es aceptable");
              mensaje.textContent= "Cadena aceptable"
              mensaje.className="text-green-500 text-xl cursor-pointer"
              const ver = document.getElementById('ver')
              if(ver){
                ver.appendChild(mensaje)
              }
            }
            if (estado === 0||estado === 2){
              console.log("Error");
              mensaje.textContent= "Cadena invalida"
              mensaje.className="text-red-500 text-xl cursor-pointer"
              const ver = document.getElementById('ver')
              if(ver){
                ver.appendChild(mensaje)
              }
            }
            if ( estado === 3){
              mensaje.textContent= "Cadena invalida, simbolo fuera del alfabeto!"
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
        placeholder='Inserta cadena que inicie con 0'
        value={inputValue} // Captura el valor del cuadro de entrada
        onChange={(e) => setInputValue(e.target.value)} // Actualiza el estado cuando cambia el cuadro de entrada
      />
    </div>
    <div className='text-center'>
    <button className=' text-gray-200 w-40 rounded-lg text-center h-12 button' onClick={analizar}><span>Analiza la entrada</span></button> {/* Llama a la función analizar al hacer clic */}
    </div>
    <div id='ver' className='text-center py-8'></div>
  </div>
  )
}

export default ejercicio04