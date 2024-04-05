import PropTypes from "prop-types"
import Button from './Button'

const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1 style={{ color: 'red', backgroundColor: 'black' }}>{title}</h1>
            <Button color='green' />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header