import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Placeholder for Nav bar</h1>

      <section className="landing-page-image-section">
        <img
          src={require('../assets/black-and-white-photo.jpg')}
          className="landing-page-image"
          alt="black and white of David and Taylor"
        />
        <h2 className="name-section">
          <span className="name-styling">David & Taylor</span>
        </h2>

        <h2 className="date-section">
          <span className="date">6.20.20</span>
        </h2>
      </section>

      <section>
        <h1>OUR STORY</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h1>The Proposal</h1>
        <h2>December 22, 2018</h2>
        <p>
          Taylor and David were surrounded by their families and closest friends
          the night he proposed. The night began in celebration of David for
          graduating from coding school. Later that evening, David gathered
          everyone into one room for a speech that he prepared. At that moment,
          David could not think of a better time when their families and closest
          friends would all be together in the same room again. Then, finally it
          happened! In front their families and friends, David got down on one
          knee and asked Taylor, "Will You Marry Me?" And, of course she said
          "Yes!" The night ended with Taylor and David celebrating another
          milestone in their relationship and a new chapter in their lives!
        </p>
      </section>

      <section>
        <h2>THE WEDDING</h2>
        <h4>PLEASE JOIN US IN CELEBRATING OUR LOVE</h4>
        <p>Saturday, June 20, 2020 @ 5:00p.m</p>
        <p>
          <ul>
            <li>Gray Gables Estate</li>
            <li>3009 Southeast Chestnut St</li>
            <li>Portland, OR 97267</li>
            <li>
              Semi-Formal: Tuxes and gowns are welcome, and so are suits and
              cocktail dresses.
            </li>
          </ul>
          <h3>Map</h3>
        </p>
      </section>
    </div>
  );
}

export default App;
