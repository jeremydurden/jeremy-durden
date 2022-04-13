import Service from "../../service/Service";

const Services = () => {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">
        What I'm Excited About
      </h2>
      <div className="services">
        <Service
          title="Development"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae animi temporibus, placeat mollitia repellat, quibusdam ipsa ipsam tenetur unde itaque numquam reprehenderit ratione. Aut delectus quasi, quis dolorum quod eveniet."
        />
        <Service
          title="React"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae animi temporibus, placeat mollitia repellat, quibusdam ipsa ipsam tenetur unde itaque numquam reprehenderit ratione. Aut delectus quasi, quis dolorum quod eveniet."
        />
        <Service
          title="Restful"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae animi temporibus, placeat mollitia repellat, quibusdam ipsa ipsam tenetur unde itaque numquam reprehenderit ratione. Aut delectus quasi, quis dolorum quod eveniet."
        />
      </div>
      <a href="#work" className="btn">
        See My Work
      </a>
    </section>
  );
};
export default Services;
