import MediaCard from "./MediaCard"
import portfolioBackground from "../assets/background-2.jpeg"

const portfolioStyle = {
  backgroundImage: `url(${portfolioBackground})`,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
}

export default function Portfolio() {
  return (
    <section id="portfolio" style={portfolioStyle}>
      <div class="dark-bg-overlay">
        <a name="portfolio"></a>
        <h2 className="section-header">Portfolio</h2>
        <div id="portfolio-card-container">
          <MediaCard />
        </div>
      </div>
    </section>
  )
}
