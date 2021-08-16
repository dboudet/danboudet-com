import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"

export default function MoreLinks() {
  return (
    <section id="links">
      <a name="links"></a>
      <h2 className="section-header">Links</h2>
      <div className="icon-list">
        <a
          href="https://www.linkedin.com/in/danboudet/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon color="primary" />
        </a>
        <a
          href="https://github.com/dboudet"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon color="primary" />
        </a>
      </div>
    </section>
  )
}
