import photo from "../../../src/assets/images/profile.jpeg";

const Introduction = () => {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I'm <strong>Jeremy Durden</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        front-end dev
      </p>
      <img src={photo} alt="" />
    </section>
  );
};
export default Introduction;
