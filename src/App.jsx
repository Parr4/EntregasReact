import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Title from './components/Title/Title'
import NavBar from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListConteiner/ItemListContainer'
import Footer from './assets/Footer/Footer'
import Relleno from './assets/Item/Item'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListDetails from './components/ItemListDetails/ItemListDetails'
import ComClass from './assets/ComponentesClase/ComClass'

// import { AddButton } from './components/CarritoWidget/CarritoWidget'






function App() {
  // const [count, setCount] = useState(0)
  // let titleApp = 'Titulo de app'

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<Title titulo='Shaman Manga Store' subtitulo='Tu tienda de Mangas'  />}/>
          <Route path='/catalog' element= { <ItemListContainer greeting={'Bienvenido a nuestra tienda, aun estamos trabajando en ella, asi que no esperes mucho de ella'} />}/>
          <Route path='/catalog/detail/:productId' element={<ItemListDetails/>}/>
          <Route path='*' element=<Navigate to="/"/>/>
        </Routes>

        {/* <img classname="w-100" src="src/assets/img/shaman-kinghd.jpeg" alt="" /> */}
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App


