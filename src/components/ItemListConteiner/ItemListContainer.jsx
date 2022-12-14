
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import FetchCatalog from '../FetchCatalog/FetchCatalog'
import ItemListDetails from '../ItemListDetails/ItemListDetails'
// import { gFetch } from '../../helpers/gFetch'
const products = []

const ItemListContainer = ({ greeting }) => {

  const [products, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('./objetos.json')// consulta a un api pero solo simulación 
      .then(response => {
        return response.json()
      })
      .then(data => setProduct(data))
      // .then(data => console.log(data))
      .catch(err => console.log(err))
      // .finally(() => console.log(products))
      .finally(() => setLoading(false))
  }, [])

  // setTimeout(() => {
  //   console.log(products);
  // }, "1000")






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
                <img src={`src/assets/img/${product.franquicia}/${product.tomo}.jpg`} alt='' className='w-50' />
                {product.price}
                <p>Stock disponible: {product.stock}</p>
              </div>

              <div className="card-footer">
                <Link to={`/catalog/detail/${product.franqId}.${product.id}`}>
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



