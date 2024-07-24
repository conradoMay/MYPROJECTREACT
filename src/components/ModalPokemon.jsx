import React from 'react'
import { IconSquareLetterX } from '@tabler/icons-react'

const ModalPokemon = ({showModal}) => {
  return (
    <section className={`fixed top-0 left-0 right-0 bg-cyan-400 h-screen ${showModal ? "block" : "hidden"}`}>
        <button className='bg-white absolute top-4 right-4 p-1 rounded-lg hover:opacity-80 transition-opacity'>
            <IconSquareLetterX size={40} stroke={3} />
        </button>
      <article className='bg-white h-[85%] absolute w-full bottom-0 rounded-tl-3xl rounded-tr-3xl text-center'>
articulos
      </article>
    </section>
  )
}

export default ModalPokemon
