import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <h1>
        Welcome to the <span>phone book</span> app!
      </h1>
      {/* <img src={img} alt="Phone Book" /> */}
    </div>
  );
};

export default HomePage;
