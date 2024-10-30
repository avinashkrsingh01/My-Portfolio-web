// src/Achievements.js
import React from 'react';
import "./Acchivment.css"
import { FaTrophy} from 'react-icons/fa';
import { FaMedal } from 'react-icons/fa';
import { FaCertificate } from 'react-icons/fa';

const achievementsData = [
  {
    icon: <FaTrophy size={40} color="#FFD700" />,
    title: "2nd Place at Hack With Uttarakhand Hackathon",
    description: "Secured 2nd position at the Hack With Uttarakhand Hackathon with the project 'Rozgaar AI', a one-stop solution for job seekers.",
    date: "October 2024",
  },
  {
    icon: <FaCertificate size={40} color="#3498db" />,
    title: "Hacktoberfest 2024 Badge",
    description: "Earned my first hackathon badge by contributing to open source projects during Hacktoberfest 2024.",
    date: "October 2024",
  },
  {
    icon: <FaMedal size={40} color="#e67e22" />,
    title: "GSSoC Contributor",
    description: "Actively contributing to the GirlScript Summer of Code open-source projects.",
    date: "In Progress",
  },
  // Add more achievements as needed
];

const Achievement = () => {
  return (
    <section className="achievements" id='Acchivment'>
      <h2>My Achievements</h2>
      <div className="achievements-list">
        {achievementsData.map((achievement, index) => (
          <div className="achievement-card" key={index}>
            <div className="icon">{achievement.icon}</div>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
            <span className="date">{achievement.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievement;

