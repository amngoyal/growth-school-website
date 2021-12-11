import React from "react";
import Banner from "../banner";
import WhatWillYouLearn from "../what-will-you-learn";
import WorkshopLearnings from "../workshop-video";
import WhoIsThisWorkshopFor from "../who-is-this-workshop-for";
import UnlockBonuses from "../unlock-bonuses";
import MeetYourTrainer from "../meet-your-trainer";
import GetCertified from "../get-certified";

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
    </div>
  );
};

export default Home;
