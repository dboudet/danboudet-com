import { useState } from "react"

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [emailOutcome, setEmailOutcome] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)

    const contactData = {
      name: name,
      email: email,
      message: message,
      time: Date.now(),
    }

    fetch("https://us-central1-dan-boudet-com.cloudfunctions.net/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
      mode: "no-cors",
    })
      .then((response) => {
        setLoading(false)
        console.log(response)
        response.status === 200
          ? setEmailOutcome("Email sent successfully.")
          : setEmailOutcome("Error sending email. Please try again.")
      })
      .catch((err) => {
        setLoading(false)
        alert("Error sending email:", err)
      })
  }

  return (
    <section id="contact">
      <a name="contact" className="offset-anchor"></a>
      <h2 className="section-header">Contact</h2>
      {/* <em>Coming Soon...</em> */}

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Email Address:
          <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Message:
          <br />
          <textarea
            type="text"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
        <br />
        <p>{emailOutcome}</p>
        <input type="submit" value="Send Your Message" />
      </form>
    </section>
  )
}
