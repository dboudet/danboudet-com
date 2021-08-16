import heroBackground from "../assets/full-headshot-2021.jpg"

const heroStyle = {
  backgroundImage: `url(${heroBackground})`,
  width: "100%",
  height: "100%",
  backgroundSize: "125%",
  backgroundAttachment: "fixed",
  backgroundPosition: "0 2%",
  backgroundRepeat: "no-repeat",
}

export default function HeroAlt() {
  return (
    <section id="hero" style={heroStyle}>
      <div className="alt-bg-overlay">
        <div className="col-half left hero-alt">
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
