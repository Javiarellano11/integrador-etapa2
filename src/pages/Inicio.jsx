import './Inicio.scss'
import Card from "../components/Card"
import { useContext, useEffect, useState } from 'react'
import ProductosContext from '../contexts/ProductosContext'
import useTitulo from '../hooks/useTitulo'

const Inicio = () => {
  const {productos} = useContext(ProductosContext)

  useTitulo ('Inicio')

  return (
    <>

      <main>
        <section className="section-cards">
          <header className="section-cards__header">
            <h1 className='title-index'>Mega Sports</h1>
            <h2 className='subtitulo-index'>Productos destacados</h2>
          </header>
        </section>

        <section className="cards-container" id="container-productos">
          {productos && productos.map((producto) => (
              <Card producto={producto} key={producto.id} />
            ))}

        </section>

      </main>


    </>
  )
}

export default Inicio