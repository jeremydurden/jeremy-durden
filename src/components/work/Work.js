import PortfolioItem from "../portfolio-item/PortfolioItem";
import speedTyping from "../../assets/images/speed-typing.png";
import simpleLifeBlog from "../../assets/images/simple-life-blog.png";
import quizzical from "../../assets/images/quizzical.png";

const Work = (props) => {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">Portfolio</h2>
      <p className="section__subtitle section__subtitle--work">
        A Selection of my Projects
      </p>
      <div className="portfolio">
        <PortfolioItem
          url="https://github.com/jeremydurden/simple-life-blog"
          img={simpleLifeBlog}
        />
        <PortfolioItem
          url="https://github.com/jeremydurden/quiz-game"
          img={quizzical}
        />
        <PortfolioItem
          url="https://github.com/jeremydurden/speedtyping"
          img={speedTyping}
        />
      </div>
    </section>
  );
};
export default Work;
