import PortfolioItem from "../portfolio-item/PortfolioItem";
import photo1 from "../../assets/images/portfolio-01.jpg";
import photo2 from "../../assets/images/portfolio-02.jpg";
import photo3 from "../../assets/images/portfolio-03.jpg";

const Work = (props) => {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">Portfolio</h2>
      <p className="section__subtitle section__subtitle--work">
        A Selection of my Projects
      </p>
      <div className="portfolio">
        <PortfolioItem url="https://www.google.com" img={photo1} />
        <PortfolioItem url="https://www.google.com" img={photo2} />
        <PortfolioItem url="https://www.google.com" img={photo3} />
      </div>
    </section>
  );
};
export default Work;
