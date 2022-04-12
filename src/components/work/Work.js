import PortfolioItem from "../portfolio-item/PortfolioItem";
import photo1 from "../../assets/images/portfolio-01.jpg";
import photo2 from "../../assets/images/portfolio-02.jpg";
import photo3 from "../../assets/images/portfolio-03.jpg";

const Work = (props) => {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title">My Work</h2>
      <p className="section__subtitle">work, work, work, work, work</p>
      <div className="portfolio">
        <PortfolioItem link="www.google.com" img={photo1} />
        <PortfolioItem link="www.google.com" img={photo2} />
        <PortfolioItem link="www.google.com" img={photo3} />
      </div>
    </section>
  );
};
export default Work;
