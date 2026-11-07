import "./Contact.css";

function Contact() {
  const whatsappNumber = "+918197458962";

  const message = encodeURIComponent(
    "Hi! I would like to enquire about your henna designs."
  );

  return (
    <section className="contact" id="contact">
      <p className="section-tag">LET'S CONNECT</p>

      <h2>
        Have a little
        <br />
        henna in mind?
      </h2>

      <p className="contact-description">
        Whether you're looking for a beautiful design
        or simply want to connect, I'd love to hear from you.
      </p>

      <div className="contact-buttons">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank"
          rel="noreferrer"
          className="contact-primary"
        >
          WhatsApp Me ↗
        </a>

        <a
          href="https://instagram.com/YOUR_USERNAME/"
          target="_blank"
          rel="noreferrer"
          className="contact-secondary"
        >
          Instagram ↗
        </a>
      </div>
    </section>
  );
}

export default Contact;
