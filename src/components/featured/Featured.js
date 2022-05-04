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
          body="As a new developer, I wasn't sure what to expect when I first began coding.  I think what I did expect was a less creative outlet than what I found.  Being a developer means constantly having to come up with new and creative solutions for problems "
        />
        <Service
          title="Learning"
          body="The only way that most of us are going to be able to solve the problems we learn into is by learning new skills.  One of the most exciting things about working in any sort of techology field is just how fast things can change.  Being able to take on new challenges means always being ready to leanr something new."
        />
        <Service
          title="React"
          body="React is a JavaScript library that allows developers to build user interfaces.  Developed by Facebook, it is clearly not just a fad tecnology.  It is used by millions of developers who make up a thriving community.  "
        />
      </div>
      <a href="#work" className="btn">
        See My Work
      </a>
    </section>
  );
};
export default Services;
