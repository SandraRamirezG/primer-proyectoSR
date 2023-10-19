import "./styles.css"
import { Button } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div>

                <img alt="logoAsesoria" src={"./logo.jpg"} width={"300px"} />

            </div>
            <div>
                <Button> Contáctanos</Button>
            </div>
            <div>
                <div>
                    <ul className="list-container">
                        <li>
                            <button className="category-button">Asesorias</button>
                        </li>
                        <li>
                            <button className="category-button">Auditorias</button>
                        </li>
                        <li><button className="category-button">Documentación</button>
                        </li>

                    </ul>

                </div>
                <CartWidget />
            </div>
</div>
            );
};
export default Navbar;
