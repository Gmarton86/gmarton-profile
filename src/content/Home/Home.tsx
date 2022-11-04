import React from 'react'
import Header from '../../component/header/Header';
import Projects from '../../component/projects/Projects';

const Home = () => {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Projects></Projects>
    </div>
  );
}

export default Home