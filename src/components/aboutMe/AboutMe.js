import photo from "../../assets/images/profile2.png";

const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <h2 className="section__h2 section__title--about">WHo I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Lorem ipsum dolor sit.
      </p>
      <div className="about-me__body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          animi temporibus, placeat mollitia repellat, quibusdam ipsa ipsam
          tenetur unde itaque numquam reprehenderit ratione. Aut delectus quasi,
          quis dolorum quod eveniet.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          animi temporibus, placeat mollitia repellat, quibusdam ipsa ipsam
          tenetur unde itaque numquam reprehenderit ratione. Aut delectus quasi,
          quis dolorum quod eveniet.
        </p>
      </div>
      <img src={photo} alt="me standing and laughing" />
    </section>
  );
};
export default AboutMe;
