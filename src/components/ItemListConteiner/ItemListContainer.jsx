
import { useState, useEffect } from 'react'
// import './itemListContainer.css'
import { Link, useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, updateDoc, where, } from 'firebase/firestore'
// import FetchCatalog from '../FetchCatalog/FetchCatalog'
import ItemListDetails from '../ItemListDetails/ItemListDetails'
import { Button, Card } from 'react-bootstrap'
import AddCartButton from '../AddCartButton/AddCartButton';
// import CatalogImport from '../FetchCatalog/FetchCatalog';
import { useCatalog } from '../FetchCatalog/FetchUse';
// import { gFetch } from '../../helpers/gFetch'
const products = []

// const addOrder = () => {

//   const order = {}
//   order.buyer = { name: 'fco', phone: '123', mail: 'pdp@gmail.com' }
//   order.price = precioTotal()
//   order.items = cartList.map(({ id, price, name }) => (a))

//   const db = getFirestore()
//   const queryCollection = collection(db, 'orders')

//   // addDoc(queryCollection)
//   // .then(resp = console.log(resp))
//   // .catch(err => console.log(err))
//   // .finally("hola")
//   // console.log("Comprando")

//   const queryDoc = doc(db, 'productos', '')
//   updateDoc(queryDoc)
// }

const ItemListContainer = ({ greeting }) => {
  const {products, error, loading} = useCatalog()
  console.log(products)

  // const [products, setProduct] = useState([])
  // const [loading, setLoading] = useState(true)


  // const { franqId } = useParams()

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

  // useEffect(() => {
  //   const db = getFirestore()
  //   const queryCollection = collection(db, 'productos')



  //   if (franqId == null) {
  //     getDocs(queryCollection)
  //       .then(data => setProduct(data.docs.map(products => ({ id: products.id, ...products.data() }))))
  //       .catch(err => console.log(err))
  //       .finally(() => setLoading(false))
  //   } else {
  //     const listaFiltrada = query(queryCollection, where('franqId', '==', franqId))
  //     getDocs(listaFiltrada)
  //       .then(data => setProduct(data.docs.map(products => ({ id: products.id, ...products.data() }))))
  //       .catch(err => console.log(err))
  //       .finally(() => setLoading(false))
  //   }
  // }, [franqId])






  setTimeout(() => {
    console.log(products)
    // setLoading(false);
  }, "1000")



  // const productos = CatalogImport
  console.log(products)


  return (
    <section className='itemList'>
      <label className='label'>{greeting}</label>
      <Container fluid className='row'>

        {loading ?
          <h2>Cargando Productos!</h2>
          :
          products.map(product => <div
            style={{ justifyContent: 'center' }}
            className='card col-lg-2 col-md-4 col-sm-6 col-6'
            key={`${product.id} + . + ${product.franqId}`}
          >
            <Card >
              <Card.Img variant="top" src={`/src/assets/img/${product.franquicia}/${product.tomo}.jpg`} />
              <Card.Header as="p">{product.editorial}</Card.Header>
              <Card.Body>

                <Card.Title>{product.franquicia} {product.tomo}</Card.Title>
                <Card.Text>
                  Precio: {product.precio}
                  <br />
                  Stock disponible: {product.stock}
                </Card.Text>
                <Link to={`/catalog/${product.franqId}/${product.id}`}><Button variant="primary">Ver Producto</Button></Link>
                <AddCartButton productPassed={product}/>
              </Card.Body>
            </Card>


          </div>


          )
        }

      </Container>

    </section>

  )
}

export { ItemListContainer }



