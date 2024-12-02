import { Buscador } from "./Buscador";
import { GridGifs } from "./GridGifs";
import { useSearchGifs } from "./useSearchGifs";

const nombre = 'Vite + React'

const Ejemplo = <p>
      <b>Vite + React es una implementación para React,</b> Un framework de Javascript para realizar implementación de vistas para aplicaciones frontend
    </p>

const Footer = <h1>
      La app para buscar Gifs de Vite + React
    </h1>

function App() {
  //Estado
  const { valorInput, onChange, onSubmit, gifs, cargando } = useSearchGifs()

  //JSX
  return (
    <div className="App">
      <h1>¡Hola {nombre}!</h1>

      {Ejemplo}

      <Buscador
        valorInput={valorInput}
        onChange={onChange}
        onSubmit={onSubmit}
      />

      <br/>

      {
        cargando ? 
          (<center><h2>Cargando...</h2></center>) :
          (
            <GridGifs 
              gifs={gifs}
            />
          )
      }

      <br/>

      <center>{Footer}</center>

    </div>
  )
}

export default App