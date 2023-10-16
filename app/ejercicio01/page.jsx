'use client'
import React, { useState } from 'react';

const Ejercicio01 = () => {
  const [inputValue, setInputValue] = useState(''); // Estado para capturar el valor del cuadro de entrada
  const [mensaje, setMensaje] = useState({ texto: '', className: '' }); // Estado para el mensaje

  const analizar = () => {
    class Automata {
      static matriz = [
        [1, 2, 2],
        [1, 1, 2],
        [2, 2, 2],
      ];

      constructor() {}

      inicio(p) {
        let i = 0;
        const c = p.split('');
        let estado = 0;
        let caracter = 0;

        while (i < c.length) {
          if (/[a-zA-Z]/.test(c[i])) caracter = 0;
          else if (/[0-9]/.test(c[i])) caracter = 1;
          else caracter = 2;

          estado = Automata.matriz[estado][caracter];
          i++;
        }

        if (estado === 1) {
          setMensaje({
            texto: 'Identificador Valido',
            className: 'text-green-500 text-xl cursor-pointer',
          });
        } else if (estado === 2) {
          setMensaje({
            texto: 'Identificador Invalido',
            className: 'text-red-500 text-xl cursor-pointer',
          });
        }
      }
    }

    const obj = new Automata();
    obj.inicio(inputValue);
  };

  const handleClearMessage = () => {
    setMensaje({ texto: '', className: '' });
    setInputValue('');
  };

  return (
    <div>
      <div className='text-center p-7'>
        <input
          className='border-black w-6/12 text-center bg-gray-100 rounded-lg h-10'
          type='text'
          placeholder='Escribe un identificador'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className='text-center'>
        <button className='text-gray-200  rounded-lg text-center  button' onClick={analizar}>
          <span className=''>Analiza la entrada</span>
        </button>
      </div>
      <div id='ver' className='text-center py-5'>
        {mensaje.texto && (
          <p
            id='mensaje'
            className={mensaje.className}
            onClick={handleClearMessage}
          >
            {mensaje.texto}
          </p>
        )}
      </div>
    </div>
  );
};

export default Ejercicio01;