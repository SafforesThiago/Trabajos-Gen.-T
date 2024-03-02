import './Carrito.css'
import { Card } from 'react-bootstrap';
import App from "./App";
import Carrito from './Components/Carrito';
import NavBar from "./Components/Navbar";
import MainPart from "./Components/MainPart";

return () => {
    <div className ='Pagina'>
        <div>
         <NavBar/>
        </div>
        <div className="Carrito">
            <Card>  
                <Carrito/>
            </Card>
            
        </div>
    </div>
}


