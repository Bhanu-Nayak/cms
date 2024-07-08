import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h2>contentfull CMS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nam
            ducimus placeat dolor, dolorem cumque accusantium sit! Quo voluptate
            in voluptas sed aperiam nemo! Optio qui recusandae perferendis quod
            ex.
          </p>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="hero" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
