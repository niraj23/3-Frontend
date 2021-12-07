import { FaStar } from 'react-icons/fa';

function Star({ filled, onClick }) {
    return(
        <FaStar
            color={filled ? "yellow" : "white"}
            onClick={onClick} />
    )
}

export default Star;