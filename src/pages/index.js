import * as React from 'react';

import Layout from '../components/layout';
import homeImage from '../images/home_background.jpg';

const containerStyles = {
  width: '100%',
  height: '100vh',
  backgroundColor: 'rgba(15, 19, 33, 0.7)',
  backgroundImage: `url(${homeImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundBlendMode: 'overlay',
};

const Home = () => {
  return (
    <Layout pageTitle={'Home'}>
      <div style={containerStyles}>
        <div>
          <div>Welcome to</div>
          <div>ROCKET LEAGUE PHILIPPINES</div>
          <div>
            RLPH is primarily a Discord server where we hold weekly game nights, hold tournaments,
            play custom games, and connect with other Filipinos who play Rocket League! This is a
            healthy community, hence we don't promote toxicity.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
