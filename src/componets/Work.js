import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import data from '../assets/data.json';

const Work = () => {
  return (
    <div id='work'>
      <h2>WORK</h2>

      <section>
        <article>
          <Carousel
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            autoFocus={true}
            interval={2000}
            infiniteLoop={true}
          >
            {data.projects.map((i) => {
              return (
                <div key={i.title} className='workItem'>
                  <img src={i.imgSrc} alt={i.title} />
                  <aside>
                    <h3>{i.title}</h3>
                    <p>{i.description}</p>
                    <a href={i.url} target='blank'>
                      View Demo
                    </a>
                  </aside>
                </div>
              );
            })}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Work;
