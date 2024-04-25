import React, { useRef } from 'react';
import { animate, motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { BsArrowUpRight, BsChevronDown, BsInstagram } from 'react-icons/bs';
import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import me from '../assets/me1.png';
// import { Link } from 'react-router-dom';

const Home = () => {
  const clientCount = useRef(null);

  const animationClientCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: { x: '-100%' },
      whileInView: { x: '0', transition: { duration: 3 } },
    },
    // button: {
    //   initial: { y: '-100%', opacity: '0' },
    //   whileInView: { y: '0', opacity: '1' },
    // },
  };

  return (
    <div id='home'>
      <div className='banner'>
        <section>
          <div>
            <motion.h1 {...animations.h1}>
              Hi, I'm <br /> Kisan Das.
            </motion.h1>
            <Typewriter
              options={{
                strings: [
                  'Skills',
                  'A React developer',
                  'JavaScript',
                  'CSS',
                  'A designer',
                ],
                autoStart: true,
                loop: true,
                cursor: '',
                wrapperClassName: 'typewriterpara',
              }}
            />

            <div>
              <a href='mailto:kisandas13@gmail.com'>Hire Me</a>
              <a href='#timeline'>
                Project <BsArrowUpRight />
              </a>
              {/* <Link to='/all-app'>
           Project <BsArrowUpRight />
         </Link> */}
            </div>
          </div>
        </section>

        <section>
          <img src={me} alt='Sagar D' />
        </section>
      </div>

      <aside className='usp'>
        <article>
          <p>
            +
            <motion.span
              whileInView={animationClientCount}
              ref={clientCount}
            ></motion.span>
          </p>
          <span>Clients worldwide</span>
        </article>

        <article>
          <p>
            +<span>50</span>
          </p>
          <span>Projects Done</span>
        </article>

        <article data-special>
          <p>Contact</p>
          <span>kisandas13@gmail.com</span>
        </article>

        <BsChevronDown />
      </aside>

      <aside className='social'>
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
      </aside>
    </div>
  );
};

export default Home;
