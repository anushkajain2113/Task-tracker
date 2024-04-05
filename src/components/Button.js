const Button = ({ color, text }) => {
    const onClick = (e) => {
        console.log(e)
    }

    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color }}
            className='btn'
        >
            {text}
        </button>
    )
}


Button.defaultProps = {
    color: 'purple'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button
