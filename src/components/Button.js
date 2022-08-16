const Button = ({ text, onClick }) => {
    return (
        <button className="Header__button" onClick={onClick}>
            {text}
        </button>
    );
};

Button.defaultProps = {
    text: "default",
};

export default Button;
