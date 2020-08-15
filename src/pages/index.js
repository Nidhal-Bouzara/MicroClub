import React, { useState } from "react";
// Components
import Layout from '../components/Layout';
import Eventcard from '../components/Eventcard';
import Eventinfo from '../components/Eventinfo';

// Style sheets
import '../styles/main.scss';
import landingStyle from '../styles/Landing.module.scss';
import aboutStyle from '../styles/AboutUs.module.scss';
import eventStyle from '../styles/OurEvents.module.scss';
import contactStyle from '../styles/ContactUs.module.scss';

// SVGs
import MCWatermark from '../assets/MCWatermark.svg';
import CUBIcon from '../assets/ContactUsButtonIcon.svg';
import FBIcon from '../assets/FacebookIcon.svg';
import InstaIcon from '../assets/InstagramIcon.svg';
import LinnkedInIcon from '../assets/LinkedInIcon.svg';
import HeroImg from '../assets/HeroImage.png';
import aboutWatermark from '../assets/AboutWatermark.svg';
import twoNextLink from '../assets/TwoNext.svg';
import weAreMC from '../assets/weAreMC.svg';
import aboutLeftDec from '../assets/aboutLeftDecoration.svg';
import aboutRightDec from '../assets/aboutRightDecoration.svg';
import eventWatermark from '../assets/EventWatermark.svg';
import agcxImg from '../assets/agcxImg.svg';
import mctfImg from '../assets/MCTFImg.svg';
import hacktoberImg from '../assets/HacktoberFest.svg';
import redhatImg from '../assets/RedhatImg.svg';
import mcLogoWatermark from '../assets/MCLogoWatermark.svg';
import contactWatermark from '../assets/ContactWatermark.svg';
import contactSMFB from '../assets/ContactSMFB.svg';
import contactSMIN from '../assets/ContactSMIN.svg';
import contactSMLI from '../assets/ContactSMLI.svg';
import atWatermark from '../assets/atWatermark.svg';
import messageWatermark from '../assets/messageWatermark.svg';
import bottomrightWatermark from '../assets/bottomrightWatermark.svg';
import whoWeAreImg from '../assets/WhoWeAreImg.png';
import ourOriginsImg from '../assets/OurOriginsImg.svg';
import infoBottomDec from '../assets/InfoBottomDec.svg';
import ourMissionAndIdealsImg from '../assets/OurMissionAndIdealsImg.svg';
import ourAudienceImg from '../assets/OurAudienceImg.svg';

export default function Home() {

  const [cardStatus, setCardStatus] = useState(false);
  const [cardNumber, setCardNumber] = useState(null);

  const handleCardClick = (event) => {
    if (cardStatus === false && event.target.dataset.id !== undefined) {
      setCardNumber(event.target.dataset.id);
    } else if (cardStatus === true) {
      setCardNumber(null);
    }
    setCardStatus(!cardStatus);
  }

  const data = [
    {
      ID: 0,
      img: whoWeAreImg,
      styling: {
        bottom: "-10rem",
        right: "3rem",
      },
      description: "We are Micro Club, a diverse group of University Students and professionals with a passion for Technology and a big heart that wants to help others discover, explore, and learn about Computer Science, Development, Programming, Security, Graphic Design, and various other related fields.",
      title: "Who We Are"
  },
  {
    ID: 1,
    img: ourOriginsImg,
    styling: {
      bottom:"0rem",
    },
    description: "We were established on March 5th, 1985, as a scientific student club within the University of Science and Technology Houari Boumediene, the first of its kind in all of Algeria. We are a non-profit organization composed of Undergraduate and Postgraduate students, as well as Professionals, united in pursuing the club's mission and ideals.",
    title: "Our Origins",
    bottomDec: infoBottomDec
  },
  {
    ID: 2,
    img: ourMissionAndIdealsImg,
    styling: {
      right: "-.4rem",
      bottom: "-0.4rem"
    },
    description: "Our mission is to propagate and popularize the Computer Science, Technology, and Digital creativity fields among the Algerian population. We also offer a platform and various opportunities for the initiated and professionals to test their skills and meet like-minded people within Algeria.\n Our Ideal is to create a generation of highly-skilled highly-motivated Algerian Developers, and provide them with a local community that is encouraging and assistive.",
    title: "Our Mission And Ideals"
  },
  {
    ID: 3,
    img: ourAudienceImg,
    styling: {
      right: "-.6rem",
      bottom: "-.6rem",

    },
    description: "We've organized many events and competitions that have attracted a wide and diverse audience. University students and professionals, women, children, and parents.\n We pride ourselves on our inclusivity within the club the same as without.",
    title: "Our Audience"
  },
  {
    ID: 4,
    img: agcxImg,
    styling: {
      right: "10rem",
      bottom: "8rem"
    },
    imgInStyle: {
      height: "40rem"
    },
    description: "Algerian Game Challenge is an Algerian National Game-Development Competition where participants try to make a video game from scratch. Participants work alone or in teams and must submit their work before a set time-frame.",
    title: "Algerian Game Challenge"
  },
  {
    ID: 5,
    img: mctfImg,
    styling: {
      right: "10rem",
      bottom: "7rem"
    },
    imgInStyle: {
      height: "40rem"
    },
    description: "Micro Capture the Flag is a computer security/hacking competition which consists of participants breaking, investigating, reverse engineering and doing anything they can to reach the end goal, a \"flag\" which is usually found as a string of text.",
    title: "Micro Capture the Flag"
  },
  {
    ID: 6,
    img: hacktoberImg,
    styling: {
      right: "10rem",
      bottom: "6rem"
    },
    imgInStyle: {
      height: "45rem"
    },
    description: "Hacktoberfest is a month long virtual festival event to celebrate open source contributions, participants receive amazing Hacktoberfest swag in exchange for contributing to public Github repositories",
    title: "Hacktober Fest"
  },
  {
    ID: 7,
    img: redhatImg,
    styling: {
      right: "10rem",
      bottom: "8rem"
    },
    imgInStyle: {
      height: "40rem"
    },
    description: "Micro Club Redhat training camp is a certified training course that we offer for free, the training camp teaches the handling of a Linux-kernel-based operating system in order to better understand and apply the concepts of Virtualization and Cloud Computing. This training camp will give students the opportunity to compete for other Redhat certifications.",
    title: "Redhat Training Camp"
  }
];

  const contactRef = React.createRef();
  const aboutRef = React.createRef();
  const eventRef = React.createRef();

  return (
    <Layout refs={{contactRef, aboutRef, eventRef}}>
        <section className={landingStyle.landingDiv}>
        <img src={MCWatermark} className={landingStyle.watermark} unselectable="on" alt="Watermark of Micro Club" />
        <section className={landingStyle.heroText}>
          <h1 className={landingStyle.heroHeadline}>We Push the Algerian Tech Field Forward</h1>
          <h2 className={landingStyle.heroSubHeadline}>
            We are a student club with a mission to enhance the Computer Science and Design fields in Algeria, we do this through our club events, trainings and competitions.
          </h2>
          <div className={landingStyle.ctaButtons}>
              <button className={landingStyle.mainCTA} onClick={() => {
                window.scroll(0, aboutRef.current.offsetTop);
              }}>What We Do</button>
              <button  className={landingStyle.secondaryCTA} onClick={() => {
                window.scroll(0, contactRef.current.offsetTop);
              }}>
                Contact Us
                <img src={CUBIcon} className={landingStyle.secondaryCTAIcon} alt="Icon of flying paper-plane" />
              </button>
          </div>
        </section>
        <div className={landingStyle.smContainer}>
          <a href="https://www.facebook.com/Micro.Club.USTHB/">
            <img src={FBIcon} className={landingStyle.smIcon} alt="Link to our Facebook page" />
          </a>
          <a href="https://www.instagram.com/microclub_usthb">
            <img src={InstaIcon} className={landingStyle.smIcon} alt="Link to our Instagram page" />
          </a>
          <a href="https://www.linkedin.com/company/micro-club">
            <img src={LinnkedInIcon} className={landingStyle.smIconHover} alt="Link to our Linked In page" />
          </a>
        </div>
        <img src={HeroImg} className={landingStyle.heroImg} alt="Man using computer" />
      </section>
      <section ref={aboutRef} className={aboutStyle.aboutContainer}>
        <img src={aboutWatermark} className={aboutStyle.watermark} alt="About Us Watermark" />
        <h1 className={aboutStyle.title}>Learn More About Us</h1>
        <div className={aboutStyle.aboutLinkContainer}>
          <h2 className={aboutStyle.aboutLink} onClick={handleCardClick} data-id={0} >
            Who We Are
            <img src={twoNextLink} className={aboutStyle.twoNextLink} alt="" />
          </h2>
          <h2 className={aboutStyle.aboutLink} onClick={handleCardClick} data-id={1} >
            Our Origins
            <img src={twoNextLink} className={aboutStyle.twoNextLink} alt="" />
          </h2>
          <h2 className={aboutStyle.aboutLink} onClick={handleCardClick} data-id={2} >
            Our Mission and Ideals
            <img src={twoNextLink} className={aboutStyle.twoNextLink} alt="" />
          </h2>
          <h2 className={aboutStyle.aboutLink} onClick={handleCardClick} data-id={3} >
            Our Audience
            <img src={twoNextLink} className={aboutStyle.twoNextLink} alt="" />
          </h2>
          { (cardStatus && cardNumber < 4) && <Eventinfo callback={handleCardClick} data={data[cardNumber]} /> }
        </div>
        <img src={aboutLeftDec} className={aboutStyle.leftDec} alt="" />
        <img src={weAreMC} className={aboutStyle.weAreMC} alt="Micro Club Member" />
        <img src={aboutRightDec} className={aboutStyle.rightDec} alt="" />
      </section>
      <section className={eventStyle.eventContainer} ref={eventRef}>
        <img src={eventWatermark} alt="" className={eventStyle.watermark} />
        <h1 className={eventStyle.title}>Our Events</h1>
        <section className={eventStyle.cardContainer}>
          <Eventcard 
            img={{
              img: agcxImg, 
              alt:"Algerian Game Challenge banner"
            }}
            text={{
              headline: "Algerian Game Challenge",
              subheadline: "A nation-wide game development contest held annually."
            }}
            handleClick={handleCardClick}
            id={4}
          />
          <Eventcard 
            img={{
              img: mctfImg, 
              alt:"Micro Capture the Flag banner"
            }}
            text={{
              headline: "Micro Capture the Flag",
              subheadline: "A nation-wide game development contest held annually."
            }}
            handleClick={handleCardClick}
            id={5}
            />
          <Eventcard 
            img={{
              img: hacktoberImg, 
              alt:"Hacktober Fest banner"
            }}
            text={{
              headline: "Hacktober Fest",
              subheadline: "A nation-wide game development contest held annually."
            }}
            handleClick={handleCardClick}
            id={6}
            />
          <Eventcard 
            img={{
              img: redhatImg, 
              alt:"M-C Redhat Training Camp banner"
            }}
            text={{
              headline: "MC Redhat Training Camp",
              subheadline: "A nation-wide game development contest held annually."
            }}
            handleClick={handleCardClick}
            id={7}
            />
            { ( cardStatus && cardNumber > 3 )  && <Eventinfo callback={handleCardClick} data={data[cardNumber]} /> }
        </section>
        <img src={mcLogoWatermark} className={eventStyle.mcLogoWatermark} alt="" />
      </section>
      <section ref={contactRef} className={contactStyle.container}>
        <img src={contactWatermark} className={contactStyle.watermark} alt="" />
        <h1 className={contactStyle.title}>Contact Us</h1>
        <section className={contactStyle.formContainer}>
          <div>
            <h1 className={contactStyle.formTitle}>Send Us An E-mail</h1>
            <div className={contactStyle.formHolder}>
              <form id="contact-form" method="POST" className={contactStyle.form + ' ' + 'gform'} action="https://script.google.com/macros/s/AKfycbxYVfF6lGfqfjGk-jt4VOiE2ezmbvpl-qOkAEBq/exec">
                <label htmlFor="first-name">First Name</label>
                <label htmlFor="last-name">Last Name</label>
                <input name="first-name" id="first-name" type="text"  required/>
                <input type="text" id="last-name" name="last-name" required/>
                <label htmlFor="email">Your E-mail</label>
                <label htmlFor="subject">Subject</label>
                <input type="email" id="email" name="email" required/>
                <input type="text" id="subject" name="subject" required/>
                <label className={contactStyle.messageLabel} htmlFor="message">Your Message</label>
                <textarea className={contactStyle.messageBox} rows="6" id="message" name="message"></textarea>
                <button type="submit" className={contactStyle.formSend}>Send</button>
              </form>
            </div>
          </div>
          <div className={contactStyle.orBorder}>
            <h1 className={contactStyle.orBorderText}>OR</h1>
          </div>
          <div>
            <h1 className={contactStyle.secondTitle}>Through Our Social Media</h1>
            <div className={contactStyle.contactSM}>
              <a href="https://www.facebook.com/Micro.Club.USTHB/" className={contactStyle.contactSMLinks}>
                <img src={contactSMFB} className={landingStyle.smIcon} alt="Link to our Facebook page" className={contactStyle.contactSMIcon} />
                Facebook
                </a>
              <a href="https://www.instagram.com/microclub_usthb" className={contactStyle.contactSMLinks}>
                <img src={contactSMIN} className={landingStyle.smIcon} alt="Link to our Instagram page" className={contactStyle.contactSMIcon} />
                Instagram
                </a>
              <a href="https://www.linkedin.com/company/micro-club" className={contactStyle.contactSMLinks}>
                <img src={contactSMLI} alt="Link to our Linked In page" className={contactStyle.contactSMIcon} />
                LinkedIn
                </a>
            </div>
          </div>
          <img src={atWatermark} alt="" className={contactStyle.leftDec} />
          <img src={messageWatermark} alt="" className={contactStyle.toprightDec} />
          <img src={bottomrightWatermark} alt="" className={contactStyle.bottomrightWatermark} />
        </section>
      </section>
    </Layout>
  );
}
