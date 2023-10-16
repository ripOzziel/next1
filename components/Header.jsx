import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='p-6 bg-zinc-900'>
    <Link href={'..'}><h1 className='text-2xl py-7 text-slate-100 text-center'>Automatas finitos deterministas</h1></Link>


      <div className=' card-group text-white pointer-events: none'>
          
            <li className='card' >
              <Link href={'/ejercicio01'}>
                <h1 className='text-xl'>Ejercicio 1</h1> <br />
                <h1>DFA que detecta identificadores</h1><br/><br/><br/><br/>
                </Link>
            </li>

            <li className='card -top-28'>
              <Link href={'/ejercicio02'}> 
                <h1 className='text-xl'>Ejercicio 2</h1><br />
                <h1 className='text-sm'>DFA que acepta solo palabras que empiecen y terminen con el mismo simbolo</h1> <br />
                <h1 className='text-sm'>Alfabeto: a,b </h1><br />
              </Link>
            </li>
            <li className='card'>
              <Link href={'/ejercicio03'}> 
              <h1 className='text-xl'>Ejercicio 3</h1> <br />
              <h1 className='text-sm'>DFA que acepta toda cadena que contenga "aabb"</h1><br />
              <h1 className='text-sm'>Alfabeto: a,b </h1><br/><br/><br/>
              </Link>
            </li>
            <li className='card'>
              <Link href={'/ejercicio04'}>
                <h1 className='text-xl'>Ejercicio 4</h1><br />
                <h1 className='text-sm'>DFA que acepta toda cadena que empiece con 0</h1><br />
              <h1 className='text-sm'>Alfabeto: 0,1 </h1><br/><br/><br/>
              </Link>
            </li>
 </div>
    
</header>
  )
}

export default Header