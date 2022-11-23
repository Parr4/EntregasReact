
import {useState} from 'react'
let valor = 0

function CarritoWidget() {
    // const valor = 0
    const [count, changeCountValue] = useState(1)
    const handleCountChanger = () => {
        changeCountValue(count+1)
        console.log(count)
        valor = count
        // console.log(valor)
      }

    return (
        <div className="CarritoWidget">
            <img className="icon" src="https://cdn-icons-png.flaticon.com/512/60/60992.png" alt="" />
            <div className="cantidad" >
                <p className="cantidad">{valor}</p>


            </div>

            <button id='addCount' onClick={ handleCountChanger }> Añadir producto +</button>
        </div>
        
    )
}

// function AddButton() {

//     return(

//     )


// }





export {CarritoWidget}
