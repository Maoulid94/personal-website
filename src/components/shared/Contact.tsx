import "../../styles/components/contact.css";

export default function Contact() {
  const phoneE164 = "+25377769349";      // calling-friendly format
  const phoneDisplay = "+253 77 769 349"; // human-friendly

  return (
    <div className="contact">
      <h2>Contact Me</h2>

      <p>
        Email:{" "}
        <a href="mailto:maoulidgras@gmail.com">maoulidgras@gmail.com</a>
      </p>

      <p>
        Phone:{" "}
        <a href={`tel:${phoneE164}`} aria-label={`Call ${phoneDisplay}`}>
          {phoneDisplay}
        </a>
      </p>

      <p>
        <a
          href="https://www.linkedin.com/in/maoulid-abdi-soubaneh"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/Maoulid94"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}
