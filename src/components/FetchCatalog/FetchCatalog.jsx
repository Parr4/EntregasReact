// import {useEffect, useState, useRef} from 'react';

  
//   const FetchCatalog = () => {
  
//     const [products, setProduct] = useState([])
//     const [loading, setLoading] = useState(true)
  
//     useEffect(() => {
//       fetch('./objetos.json')// consulta a un api pero solo simulación 
//         .then(response => {
//           return response.json()
//         })
//         .then(data => setProduct(data))
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
//         .finally(() => console.log(products))
//         .finally(() => setLoading(false))
//     }, [])

//     return(
//         {products.map(products => )}
//     )
// }
// export default FetchCatalog