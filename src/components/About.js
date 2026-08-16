import Resume from "./Resume"

export default function About() {
  return (
    <section id="about">
      <a name="about" title="About Me" className="offset-anchor"></a>
      <h2 className="section-header">About Me</h2>
      <div className="about-p-container">
        <p>
          Cloud Software Engineer focused on designing and building cloud-native
          applications that are practical, efficient, scalable, and
          maintainable. I enjoy solving complex technical problems with a
          systems-level perspective, combining thoughtful solution design,
          attention to detail, and strong collaboration across engineering,
          product, and business teams.
        </p>
      </div>
      <Resume />
    </section>
  )
}
