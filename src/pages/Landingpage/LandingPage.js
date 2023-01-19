import React from 'react';
import CardItems from '../../components/cards/CardItems';
import CardSearchBody from '../../components/cards/CardSearchBody';
import NavBar from '../../components/navbar/NavBar';
import NavBarCategory from '../../components/navbar/NavBarCategory';
import './landingpage.css';
import Style from './landingpage.module.css';
const LandingPage = () => {
  return (
    <div className='w-100 ' style={{height:"600px"}}>
      <NavBar />
      <div className={"w-100  bg-gray " + Style.backgroundbody} style={{ height: "450px" }}>
        <NavBarCategory />
        <CardSearchBody />
      </div>
      <CardItems />
    </div>


  );
};

export default LandingPage;