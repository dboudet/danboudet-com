import Headshot from "./Headshot";

export default function Portfolio() {
    return (
        <section id="portfolio">
            <a name="portfolio"></a>
            <h2>Portfolio</h2>
            <div id="portfolio-card-container">
                <div className="portfolio-card">
                    <Headshot />
                    <h2>Project Name #1</h2>
                    <p>Maybe a short description of the project here.</p>
                    <p><a href="#">Link to Project</a></p>
                </div>
                <div className="portfolio-card">
                    <Headshot />
                    <h2>Project Name #1</h2>
                    <p>Maybe a short description of the project here.</p>
                    <p><a href="#">Link to Project</a></p>
                </div>
                <div className="portfolio-card">
                    <Headshot />
                    <h2>Project Name #1</h2>
                    <p>Maybe a short description of the project here.</p>
                    <p><a href="#">Link to Project</a></p>
                </div>
            </div>
        </section>
    )
}