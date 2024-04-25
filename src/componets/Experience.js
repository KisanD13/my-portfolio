import React, { Fragment } from 'react';
import data from '../assets/data.json';
import TimelineItem from './TimelineItem';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Experience = () => {
  return (
    <Fragment>
      <div id='timeline'>
        <div className='timelineBox'>
          {data.projects.map((item, index) => {
            return (
              <TimelineItem
                heading={item.title}
                text={item.date}
                index={index}
                key={index}
              />
            );
          })}
        </div>
        <button>
          <Link to={'/all-app'}>
            Check My Projects
            <FaArrowRightLong />
          </Link>
        </button>
      </div>
    </Fragment>
  );
};

export default Experience;
