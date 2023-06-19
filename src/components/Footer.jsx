import { Order } from './Order';

export const Footer = () => {
  
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 17;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()} ¡Abierto, venga por lo suyo! */}
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <div className="order">
          <p>
            {' '}
            ¡Cerrado! Abrimos de {openHour}:00AM a {closeHour}:00PM{' '}
          </p>
        </div>
      )}
    </footer>
  );
};
