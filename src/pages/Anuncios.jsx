import React from 'react'
import Navbar from '../components/Navbar'
{/* importar todo */}
import { useEffect, useState } from 'react'
import { getInfo } from '../services/llamados'
function Anuncios() {
    const [publicarAnuncio, setpublicarAnuncio] = useState([])
    const [recarga,setRecarga] = useState(false)
  useEffect(() => {
    async function anuncios () {
      const listaAnuncios = await getInfo("anuncios")
      setpublicarAnuncio(listaAnuncios)
    }
    anuncios()
  }, [recarga])

  return (
    <>                            
    <Navbar/>
    {/* importa el nav de components */}
    <h2>Anuncios</h2>
    {publicarAnuncio.map((anun=>{
      return(
        <>
          <li>{anun.publicarAnuncio}</li> 
        </>
      )
    }))}
    </>
  )
}

export default Anuncios                           