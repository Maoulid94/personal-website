import "../../styles/components/contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>
        Email: <a href="mailto:youremail@example.com">maoulidgras@gmail.com</a>
      </p>
      <p>
        Phone:<a href="">77769349</a>
      </p>
      <p>
        <a
          href="http://www.linkedin.com/in/maoulid-abdi-soubaneh"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        {" | "}
        <a href="https://github.com/Maoulid94" target="_blank" rel="noreferrer">
          GitHub
        </a>
        {" | "}
        <a
          href="https://maoulid-dev.pages.dev/"
          target="_blank"
          rel="noreferrer"
        >
          Maoulid.dev/Cv
        </a>
      </p>
    </div>
  );
}
