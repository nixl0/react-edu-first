import Brands from "../Brands/Brands";
import CatalogItem from "../CatalogItem/CatalogItem";
import "./Body.css";

function showAlert(e) {
    alert(e);
}

function Body() {
    return (
        <div className="Body">
            <div className="Body__brands">
                <Brands />
            </div>
            <div className="Body__catalog">
                <h1 className="catalog__title">Catalog</h1>

                <div className="catalog__items">
                    <CatalogItem picture="3050.png" />
                    <CatalogItem picture="3050.png" />
                    <CatalogItem picture="3050.png" />

                    
                </div>
            </div>
        </div>
    );
}

export default Body;
