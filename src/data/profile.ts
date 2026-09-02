import type { Profile } from '../types';

export const profile: Profile = {
  name: 'Ammar Mohamed',
  bio: "Welcome to my portfolio! I enjoy building things, learning how systems work, and exploring both hardware and software. I'm always looking for the next problem to solve.",
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
      { category: 'Club', value: 'Vice President @CSHub 2024/25' },
    ],
  },
  contact: {
    email: 'ammarrmoo@gmail.com',
    linkedin: 'https://linkedin.com/in/ammarmo',
    github: 'https://github.com/ammarmo123',
  },
};
