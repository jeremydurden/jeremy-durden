const Service = (props) => {
  return (
    <div className="service">
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  );
};
export default Service;
