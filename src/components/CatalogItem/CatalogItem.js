import { Component } from "react";
import "../Body/Body.css";

class CatalogItem extends Component {
    constructor(props) {
        super(props);
    }

    showAlert(message) {
        alert(message);
    }

    render() {
        return (
            <div
                className="CatalogItem"
                onClick={() => this.showAlert("title")}
            >
                <img
                    className="CatalogItem__picture"
                    src={`images/${this.props.picture}`}
                    alt="What happened"
                />

                <div className="CatalogItem__text">
                    <h3 className="CatalogItem__title">title</h3>
                    <p className="CatalogItem__desc">desc</p>
                    <p className="CatalogItem__price">price</p>
                </div>
            </div>
        );
    }
}

export default CatalogItem;
