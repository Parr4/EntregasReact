import { BotonNav } from "../BotonNav/BotonNav";
import { CarritoWidget } from "../CarritoWidget/CarritoWidget";



export default function NavBar() {
    return (
        <nav>
            <div className="linea">
                <div>
                    <a href="https://www.youtube.com/watch?v=0mGr5bMItQY"><img width="50" src="src/assets/img/logo.png" alt="Logotipo" /></a>
                </div>
                <div className="NavBarBot">
                    <BotonNav nombre='Inicio' />
                    <BotonNav nombre='Catalogo' />
                    <BotonNav nombre='Contacto' />
                    <BotonNav nombre='Preguntas frecuentes' />
                </div>
                <CarritoWidget />
            </div>
        </nav>
    )
}
