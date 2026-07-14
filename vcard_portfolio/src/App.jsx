import './App.css';
import details from "./assets/Details.json";
const profileImg = new URL(`./assets/${details.profilePhoto}`, import.meta.url).href;
const visingCardImg = new URL(`./assets/${details.visitingCard}`, import.meta.url).href;
const resume = new URL(`./assets/${details.resume}`, import.meta.url).href;
const visiting_card = new URL(`./assets/${details.addContacts}`, import.meta.url).href;
import mailImg from "/icons/mail.svg";
import callImg from "/icons/call.svg";
import resumeImg from "/icons/download_resume.svg";
import siteImg from "/icons/site.svg";


function App() {

  return (
    <section className='Vcard'>
      <div className='section-1'>
        <span className="name">{details.name}</span>
        <span className="title">{details.title}</span>
        <span className="description">{details.description}</span>
      </div>
      <div className='section-2'>
        <a href={`tel:${details.mobileNo}`}>
          <img src={callImg} alt="call" />
        </a>

        <a href={`mailto:${details.email}`}>
          <img src={mailImg} alt="mail" />
        </a>

        <a href={details.website} target="_blank" rel="noopener noreferrer">
          <img src={siteImg} alt="site" />
        </a>

        <a href={resume} download="Deepskikha_Resume.pdf">
          <img src={resumeImg} alt="resume" />
        </a>
      </div>

      <a href={visiting_card} download="Deepshikha_Contact.vcf" className='section-3'>
        Add Contact
      </a>
    </section>
  )
}

export default App
