const PortfolioItem = (props) => {
  return (
    <a href={props.link} className="portfolio__item">
      <img src={props.img} alt="" className="portfolio__img" />
    </a>
  );
};
export default PortfolioItem;
