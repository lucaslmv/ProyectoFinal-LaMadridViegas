import { Link } from "react-router-dom";

function NotFound () {
    return (
        <div>
            <h2>Página no encontrada</h2>
            <Link to="/">Volver al inicio</Link>
        </div>
    );
}

export default NotFound; 