import heroImage from "../../assets/images/hero.png";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <h1>
        Grow Your Skills.
        <br />
        Shape Your Future.
      </h1>
      <p className="sub">
        SkillSync helps you discover personalized learning paths and career opportunities using AI -
        designed to match your goals and strengths.
      </p>
      <button className="get-started" type="button">
        Get Started
      </button>
      <img className="heroimg" src={heroImage} alt="SkillSync hero illustration" />
    </section>
  );
}
