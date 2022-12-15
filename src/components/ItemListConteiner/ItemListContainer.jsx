
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {collection, doc, getDoc, getDocs, getFirestore, query, where, } from 'firebase/firestore'
// import FetchCatalog from '../FetchCatalog/FetchCatalog'
import ItemListDetails from '../ItemListDetails/ItemListDetails'
// import { gFetch } from '../../helpers/gFetch'
const products = []



const ItemListContainer = ({ greeting }) => {

  const [products, setProduct] = useState([])
  const [loading, setLoading] = useState(true)


    const {franqId} = useParams()

  // useEffect(() => {
  //   fetch('./objetos.json')
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => setProduct(data))

  //     .catch(err => console.log(err))

  //     .finally(() => setLoading(false))
  // }, [])

  // useEffect(()=>{

  //   const db = getFirestore()
  //   const queryDoc = doc(db, 'productos', 'akOgeundimM6ZEdVhQju')
  //   getDoc(queryDoc)
  //   // .then(resp => console.log(resp.data()))
  //   .then (resp => setProduct({id: resp.id, ...resp.data()} ))


  // })

  useEffect(() =>{
    const db = getFirestore()
    const queryCollection = collection(db, 'productos')



    if (franqId == null){
      getDocs(queryCollection)
      .then(data => setProduct(data.docs.map(products => ({id: products.id, ...products.data()}))))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    } else {
      const listaFiltrada = query(queryCollection, where('franqId', '==', franqId))
      getDocs(listaFiltrada)
      .then(data => setProduct(data.docs.map(products => ({id: products.id, ...products.data()}))))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }}, [franqId])





  setTimeout(() => {
    console.log(products);
  }, "1000")






  return (
    <section>
      <label>{greeting}</label>

        {loading ?
          <h2>Cargando Productos!</h2>
          :
          products.map(product => <div
            style={{ marginLeft: 100 }}
            className='col-md-3'
            key={`${product.id} + . + ${product.franqId}`}
          >
            <div className="card w-100 mt-5" >
              <div className="card-header">
                {`${product.franquicia} ${product.tomo} / ${product.editorial}`}
              </div>
              <div className="card-body">
                <img src={`/src/assets/img/${product.franquicia}/${product.tomo}.jpg`} alt='' className='w-50' />
                {product.price}
                <p>Stock disponible: {product.stock}</p>
              </div>

              <div className="card-footer">
                <Link to={`/catalog/${product.franqId}/${product.id}`}>
                  <button className="btn btn-outline-primary btn-block">
                    Ver más
                  </button>
                </Link>
                <button className="btn btn-outline-primary btn-block">
                  Agregar al carrito
                </button >
              </div>
            </div>


          </div>


          )
        }



    </section>
  )
}

export { ItemListContainer }



