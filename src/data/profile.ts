import type { Profile } from '../types';

export const profile: Profile = {
  name: 'Ammar Mohamed',
  bio: "I love building things and chasing the hardest problems I can find. My work sits at the intersection of software and hardware — from silicon bring-up to the code that configures it, with a healthy detour into machine learning along the way. Outside of that, I'm usually teaching, tinkering, or trying to understand something a little too deeply.",
  education: {
    institution: 'York University',
    degree: 'Honours Bachelor of Science, Computer Science',
    achievements: [
      { category: 'Academia', value: "3x Dean's Honour Roll" },
      { category: 'Awards', value: '$120,000+ in scholarships' },
      {
        category: 'Research',
        value: '2nd best presentation - Lassonde Conference 2024',
        link: 'https://www.yorku.ca/yfile/2023/10/06/lassonde-undergrads-awarded-for-sdg-projects/',
      },
      {
        category: 'Hackathon',
        value: 'Hack the North 2024 winner',
        link: 'https://devpost.com/software/dafp',
      },
      { category: 'Capstone', value: 'Innovation Award 2024 - YSpace' },
    ],
  },
  contact: {
    email: 'ammarrmoo@gmail.com',
    linkedin: 'https://linkedin.com/in/ammarmo',
    github: 'https://github.com/ammarmo123',
  },
};
