import photo from "../../../src/assets/images/profile.jpeg";

const Introduction = () => {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Jeremy Durden</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        FRONT-END DEV
      </p>
      <img src={photo} alt="" className="intro__img" />
    </section>
  );
};
export default Introduction;
