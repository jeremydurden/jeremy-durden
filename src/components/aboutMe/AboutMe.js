import photo from "../../assets/images/profile2.png";

const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <h2 className="section__h2 section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Developer based out of Seatte, WA
      </p>
      <div className="about-me__body">
        <p>
          When I'm not at my computer, I love being able to take advantage of
          everything that the Pacific Northwest has to offer. Living in Seattle,
          WA, I have quick access to the mountains, fresh water, fantastic food
          and restaurants as well as miles miles of trails for hiking.
        </p>
        <p>
          I love climbing—primarily bouldering—but also some sport routes when I
          can. I spend most of my climbing time in the gym, but will happily
          climb outdoors when the weather permits. In my free time I also like
          reading fiction, cooking and watching movies.
        </p>
      </div>
      <img
        src={photo}
        alt="me standing and laughing"
        className="about-me__img"
      />
    </section>
  );
};
export default AboutMe;
