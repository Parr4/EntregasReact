import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Title from './components/Title/Title'
import NavBar from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListConteiner/ItemListContainer'
import Footer from './assets/Footer/Footer'
import Relleno from './assets/Item/Item'
// import { AddButton } from './components/CarritoWidget/CarritoWidget'






function App() {
  // const [count, setCount] = useState(0)
  // let titleApp = 'Titulo de app'

  return (
    <div className="App">
      <NavBar/>
      <Title titulo='Shaman Manga Store' subtitulo='Tu tienda de Mangas'/>
      <ItemListContainer greeting={'Bienvenido a nuestra tienda, aun estamos trabajando en ella, asi que no esperes mucho de ella'}/>
      {/* <AddButton/> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Item/>  */}
      <Relleno/>
      <Footer/>
    </div>
  )
}

export default App
