import Button from "./Button";

const Header = ({ title, onAdd }) => {
    return (
        <header className="Header">
            <h3 className="Header__title">{title}</h3>
            <Button text={"Add"} onClick={onAdd} />
        </header>
    );
};

Header.defaultProps = {
    title: "hello world",
};

export default Header;
