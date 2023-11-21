import React, { useState } from 'react';

const Home = () => <div>Home Content</div>;
const About = () => <div>About Content</div>;
const Contact = () => <div>Contact Content</div>;

const NavBar = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => handleTabClick('home')}>Home</li>
          <li onClick={() => handleTabClick('about')}>About</li>
          <li onClick={() => handleTabClick('contact')}>Contact</li>
        </ul>
      </nav>

      <div>
        {activeTab === 'home' && <Home />}
        {activeTab === 'about' && <About />}
        {activeTab === 'contact' && <Contact />}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Localhost</h1>
      <NavBar />
    </div>
  );
};

export default App;
