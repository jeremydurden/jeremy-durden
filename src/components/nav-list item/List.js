const List = ({ url, text, removeClass }) => {
  return (
    <li className="nav__item">
      <a onClick={removeClass} href={url} className="nav__link">
        {text}
      </a>
    </li>
  );
};
export default List;
