import Resume from "./Resume"

export default function About() {
  return (
    <section id="about">
      <a name="about" title="About Me" className="offset-anchor"></a>
      <h2 className="section-header">About Me</h2>
      <div className="about-p-container">
        <p>
          I began my career at The Palm Beach Post, spending 7 years in various
          AdOps roles and gaining a breadth of knowledge across all aspects of
          digital marketing and basic web development. In 2013, I joined the
          Cultural Council for Palm Beach County, where I directly managed and
          maintained palmbeachculture.com for eight years.
        </p>
        <p>
          I've always had a knack for programming, and more generally, I'm a
          problem-solver &ndash; instinctually drawn toward logic challenges.
          Now armed with full stack capabilities and modern software engineering
          practices, I'm thrilled to shift my career back to a more technical
          path.
        </p>
      </div>
      <Resume />
    </section>
  )
}
