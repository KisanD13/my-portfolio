import React, { Fragment } from 'react';

const Header = () => {
  return (
    <nav>
      <NavContent />
    </nav>
  );
};

const NavContent = () => {
  return (
    <Fragment>
      <h2>Kisan D</h2>
      <div>
        <a href='/#home'>Home</a>
        <a href='/#work'>Work</a>
        <a href='/#timeline'>Experiences</a>
        <a href='/#contact'>Contact</a>
      </div>
      <a href='mailto:kisandas13@gmail.com'>
        <button>Email</button>
      </a>
    </Fragment>
  );
};

export default Header;
