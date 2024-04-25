import React from 'react';
import allData from '../assets/allData.json';
import { FaRightFromBracket } from 'react-icons/fa6';

const AllApp = () => {
  return (
    <div className='allApp'>
      {allData.projects.map((item, index) => {
        return (
          <div
            style={{ backgroundImage: `url(${item.imgSrc})` }}
            className='cart'
            key={index}
          >
            <a href={item.url} target='blank'>
              <button>
                {item.title}
                <span>
                  <FaRightFromBracket />
                </span>
              </button>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default AllApp;
