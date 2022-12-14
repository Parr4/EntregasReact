import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import BotonCant from "../BotonCant/BotonCant"

const ItemListDetails = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    console.log('Id producto: ', productId)


    // usar el useEffect en vez del useState, tira bucle xq esta 2 veces llamado
    useState(() => {
        fetch('/objetos.json')
        .then(response => {
            return response.json()
        })
            // .then(respProduct => setProduct(respProduct[0]))
            .then(respProd => setProduct(respProd.find(prod => `${prod.franqId}.${prod.id}` == productId)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    })

    console.log('product', product)

    return (
        // <Link to={`catalog/detail/${product.franqId}.${product.id}`}>
        <section>
            {loading ?
          <h2>Cargando Productos!</h2>
          :
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`catalog/detail/${product.franquicia} ${product.tomo} / ${product.editorial}`}
                </div>
                <div className="card-body">
                    <img src={`/src/assets/img/${product.franquicia}/${product.tomo}.jpg`} alt='' className='w-50' />
                    {product.price}
                    <p>Stock disponible: {product.stock}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-outline-primary btn-block">
                        Agregar al carrito
                    </button >
                    <BotonCant product={product}/>
                </div>
            </div>}
        </section>
        // </Link>
    )
}

export default ItemListDetails
