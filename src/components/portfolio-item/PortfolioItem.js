const PortfolioItem = (props) => {
  return (
    <a
      href={props.url}
      className="portfolio__item"
      target="_blank"
      rel="noreferrer"
    >
      <img src={props.img} alt="" className="portfolio__img" />
    </a>
  );
};
export default PortfolioItem;
