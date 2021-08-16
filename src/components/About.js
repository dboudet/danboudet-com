import Resume from "./Resume"

export default function About() {
  return (
    <section id="about">
      <a name="about" title="About Me" className="offset-anchor"></a>
      <h2 className="section-header">About Me</h2>
      <div className="about-p-container">
        <p>
          <em>Coming soon...</em>
        </p>
        <p>
          <em>
            In the meantime, please take a look at my resume, as well as my
            LinkedIn and GitHub profiles further below.
          </em>
        </p>
        {/* <p>
          I began my career at The Palm Beach Post, spending 7 years in various
          AdOps roles and gaining a breadth of knowledge across all aspects of
          digital marketing and website management. In 2013, I took a position
          as Interactive Manager with the Cultural Council for Palm Beach County
          &ndash; where I directly managed and maintained palmbeachculture.com
          for eight years. Along the way I was promoted up to Director of
          Marketing and Research, supervising an internal team and overseeing
          agency partners in the execution of a $1mm+ budget.
        </p>
        <p>
          I've always had a knack for programming, and more generally, I just
          love any kind of complex logic and problem-solving. Now armed with
          full stack capabilties and current software development practices, I'm
          thrilled to shift my career back to a more technical path.{" "}
        </p> */}
      </div>
      <Resume />
    </section>
  )
}
