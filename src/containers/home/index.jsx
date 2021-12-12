import React from "react";
import Banner from "../banner";
import WhatWillYouLearn from "../what-will-you-learn";
import WorkshopLearnings from "../workshop-video";
import WhoIsThisWorkshopFor from "../who-is-this-workshop-for";
import UnlockBonuses from "../unlock-bonuses";
import MeetYourTrainer from "../meet-your-trainer";
import GetCertified from "../get-certified";
import GetTheOffer from "../get-the-offer";
import Faqs from "../faqs";
import WorkByStudents from "../work-by-students";

const Home = () => {
  return (
    <div>
      <Banner />
      <WorkshopLearnings />
      <WhatWillYouLearn />
      <WhoIsThisWorkshopFor />
      <UnlockBonuses />
      <WorkByStudents />
      <MeetYourTrainer />
      <GetCertified />
      <GetTheOffer />
      <Faqs />
    </div>
  );
};

export default Home;
