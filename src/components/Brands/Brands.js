import "./Brands.css";

function Brands() {
    return (
        <div className="Brands">
            <ul className="Brands__list">
                <li className="Brands__brand">
                    <a className="Brands__link" href="#">All brands</a>
                </li>
                <li className="Brands__brand">
                    <a className="Brands__link" href="#">One brand</a>
                </li>
                <li className="Brands__brand">
                    <a className="Brands__link" href="#">Two brand</a>
                </li>
                <li className="Brands__brand">
                    <a className="Brands__link" href="#">Three brand</a>
                </li>
                <li className="Brands__brand">
                    <a className="Brands__link" href="#">Four brand</a>
                </li>
                <li className="Brands__brand">
                    <a className="Brands__link" href="#">Five brand</a>
                </li>
            </ul>
        </div>
    );
}

export default Brands;
