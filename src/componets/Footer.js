import React from 'react';
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer id='contact'>
      <section>
        <h1>Contact Me</h1>
        <p>
          <span>
            <FaPhoneAlt /> : 6900587708
          </span>
          <span>
            <MdOutlineMail /> : kisandas13@gmail.com
          </span>
          <span>
            <FaLocationDot /> : Ar Residency, Panathur, Bangalore, 560103
          </span>
        </p>
      </section>
      <section className='skill'>
        <h1>Skills</h1>
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Redux</span>
        </div>
      </section>
      <section>
        <h1>Follow on</h1>
        <div>
          <a href='https://github.com/kamal17121995' target='blank'>
            <FaGithub />
          </a>

          <a
            href='https://www.linkedin.com/in/kisan-das-450356128/'
            target='blank'
          >
            <FaLinkedin />
          </a>
          <a href='https://www.facebook.com/king.kisan.7' target='blank'>
            <FaFacebookSquare />
          </a>
          <a href='https://www.instagram.com/_das13/' target='blank'>
            <BsInstagram />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
