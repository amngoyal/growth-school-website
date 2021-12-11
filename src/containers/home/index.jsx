import React from "react";
import Banner from "../banner";
import WhatWillYouLearn from "../what-will-you-learn";
import WorkshopLearnings from "../workshop-video";
import WhoIsThisWorkshopFor from "../who-is-this-workshop-for";
import UnlockBonuses from "../unlock-bonuses";
import MeetYourTrainer from "../meet-your-trainer";
import GetCertified from "../get-certified";
import GetTheOffer from "../get-the-offer";

const Home = () => {
  return (
    <div>
      <Banner />
      <WorkshopLearnings />
      <WhatWillYouLearn />
      <WhoIsThisWorkshopFor />
      <UnlockBonuses />
      <MeetYourTrainer />
      <GetCertified />
      <GetTheOffer />
    </div>
  );
};

export default Home;
