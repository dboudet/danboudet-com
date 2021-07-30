import Headshot from "./Headshot"

export default function Hero() {
    return (
        <section id="hero">
            <div className="col-half left">
                <h2>Dan Boudet</h2>
                <p>Full&nbsp;Stack Software&nbsp;Engineer with 15 years of website management and marketing experience</p>
            </div>
            <div className="col-half right">
                <Headshot />
                <button>About&nbsp;Me</button>
            </div>
        </section>
    )
}