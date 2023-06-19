
import { seafoodData } from '../data/data';
import { Seafood } from './Seafood';

export const Menu = () => {
  const seafood = seafoodData;
  const seafoodSize = seafood.length;

  return (
    <main className="menu">
      <h2>Nuestro menú</h2>

      {seafoodSize > 0 ? (
        <>
          <p>
            Mariscos exquisitos y variados, seis platos llenos de calidad sabrán
            deleitar paladares sofisticados.
          </p>

          <ul className="seafood">
            {seafood.map((shellfish) => {
              const { id, name, ingredients, price, photoName, soldOut } =
                shellfish;

              return (
                <Seafood
                  key={id}
                  name={name}
                  ingredients={ingredients}
                  photoName={photoName}
                  price={price}
                  soldOut={soldOut}
                />
              );
            })}
          </ul>
        </>
      ) : (
        <p>Sin stock, vuelva después.</p>
      )}
    </main>
  );
};
