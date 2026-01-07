function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <p>
        Feel free to reach out for collaboration, projects, or just a friendly
        hello.
      </p>

      <div>
        <p>
          Email:
          <a href="mailto:nishanth@example.com"> nishanth@example.com</a>
        </p>
        <p>Location: India</p>
      </div>

      <form>
        <div>
          <input type="text" placeholder="Your Name" required />
        </div>

        <div>
          <input type="email" placeholder="Your Email" required />
        </div>

        <div>
          <textarea placeholder="Your Message" rows="5" required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
