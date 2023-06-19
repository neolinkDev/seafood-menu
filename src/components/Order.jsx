

import PropTypes from 'prop-types';


export function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p style={{textAlign: "center"}}>Abrimos desde las { openHour }:00AM hasta las { closeHour }:00PM ¡Venga por lo suyo! </p>
      <button className="btn">Ordena</button>
    </div>
  );
}

Order.propTypes = {
  openHour: PropTypes.number.isRequired,
  closeHour: PropTypes.number.isRequired
}
