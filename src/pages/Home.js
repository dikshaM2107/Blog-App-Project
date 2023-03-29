import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to my Blog!</h1>
      <p>Check out some of my latest posts:</p>
      <ul>
        <li><a href="/blog/1">Post 1</a></li>
        <li><a href="/blog/2">Post 2</a></li>
        <li><a href="/blog/3">Post 3</a></li>
      </ul>
      <p>Learn more about me <a href="/about">here</a>.</p>
    </div>
  );
}

export default Home;
