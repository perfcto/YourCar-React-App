import classes from './carsType.module.css';

const CarsType = () => {
  const photoArr = [];
  for (let i = 0; i < 8; i++) {
    photoArr.push(i + 1);
  }
  return (
    <section className={classes.carsType}>
      <ul className={classes.carsTypeList}>
        {photoArr.map((num) => {
          return (
            <li key={Math.random().toString()}>
              <img src={require(`../imgs/cartype (${num}).png`)} alt='car' />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CarsType;
