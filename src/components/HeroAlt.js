import Headshot from "./Headshot"
import heroBackground from "../assets/headshot.jpg"

const heroStyle = {
  backgroundImage: `url(${heroBackground})`,
  width: "100%",
  height: "100%",
  backgroundSize: "contain",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
}

export default function HeroAlt() {
  return (
    <section id="hero" style={heroStyle}>
      <div className="dark-bg-overlay">
        <div className="col-half left">
        </div>
        <div className="col-half right hero-alt">
          <h2>Full&nbsp;Stack Software&nbsp;Engineer</h2>
          <p>
            &#123;Programmer by nature &ndash; with 15 years of website
            management and marketing experience&#125;
          </p>
        </div>
      </div>
    </section>
  )
}
