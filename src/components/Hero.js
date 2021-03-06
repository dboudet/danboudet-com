import Headshot from "./Headshot"
import heroBackground from "../assets/background-3.jpeg"

const heroStyle = {
  backgroundImage: `url(${heroBackground})`,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
}

export default function Hero() {
  return (
    <section id="hero" style={heroStyle}>
      <div className="dark-bg-overlay">
        <div className="col-half left">
          <h2>Full&nbsp;Stack Software&nbsp;Engineer</h2>
          <p>
            &#123;Programmer by nature &ndash; with 15 years of website
            management and marketing experience&#125;
          </p>
        </div>
        <div className="col-half right">
          <Headshot />
        </div>
      </div>
    </section>
  )
}
