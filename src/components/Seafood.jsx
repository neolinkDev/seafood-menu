
import PropTypes from 'prop-types';

export const Seafood = ({name, ingredients, price, photoName, soldOut}) => {

  // if(soldOut) return null;

  return (
    <li className={`shellfish ${soldOut ? 'sold-out' : '' }`}>
      <img src={ photoName } alt={ name } />
      <div>
        <h3>{ name }</h3>
        <p>{ ingredients }</p>
        <span>{ soldOut ? 'AGOTADO' : price }</span>
      </div>
    </li>
  )
}

Seafood.propTypes = {
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  photoName: PropTypes.string.isRequired,
  soldOut: PropTypes.bool.isRequired
}