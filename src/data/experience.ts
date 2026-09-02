import type { ExperienceEntry } from '../types';

export const experience: ExperienceEntry[] = [
  {
    id: 'amd',
    organization: 'AMD',
    role: 'ASIC Systems Engineer Intern',
    dateRange: 'May 2025 – Aug 2026',
    location: 'Markham, ON',
    reflection: [
      'I worked on automation, bringups, and hardware debugs across several AMD products, including next-generation Ryzen, EPYC, and MI450.',
      "A big part of my work was improving my team's internal automation infrastructure. The team was moving away from manually running tests through internal GUI tools toward a Python-based framework with reusable, project-agnostic abstractions. I contributed to this infrastructure, added support for new hardware access methods and firmware features, and helped build an internal dashboard using Python, React, and Electron. We also introduced Jenkins and CI/CD to automate register data generation, turning processes that once took multiple days into ones that could run in around 30 minutes.",
      "Alongside this work, I gradually took on more responsibility with hardware bringups and debugging. I started by supporting the bringup of a brand-new high-speed interconnect IP (UCIe) on MI450, helping with its preparation, automation, and initial validation. As I gained experience, I began taking ownership of more of the bringup and debug process. By my third bringup, I was able to independently own and lead the bringup of an IP on next-generation Desktop Ryzen CPUs, driving the work to enable key features ahead of program milestones and leading a high-priority debug. I learned how to debug within the constraints of real silicon and collaborate closely with Hardware, Firmware, and Validation teams to root cause issues and find solutions.",
      "Seeing how much more efficient the team became through the automation work really changed the way I think about engineering. It made me appreciate that you can have a lot of impact not just by solving the problem in front of you, but by improving the tools and processes around it. This is something I'll definitely carry with me in all my future work.",
    ],
  },
  {
    id: 'yorku-ta',
    organization: 'York University',
    role: 'Teaching Assistant, Supplemental Instructor',
    dateRange: 'Sep 2024 – Dec 2025',
    location: 'Toronto, ON',
    reflection: [
      'I was a TA for three courses (Software Tools, Embedded Systems, and Digital Design) and a Supplemental Instructor for Discrete Mathematics. My favourite part was working directly with students, whether it was helping them through labs or sitting down with them during office hours to work through a problem.',
      'I genuinely love teaching and interacting with people. Everyone approaches problems differently, and teaching taught me to listen, adapt how I explain things, and appreciate different ways of thinking. More than anything, it showed me how much I enjoy working with people, helping them understand something, and learning from them along the way.',
    ],
  },
  {
    id: 'evertz',
    organization: 'Evertz Microsystems',
    role: 'FPGA Design Engineer Intern',
    dateRange: 'Sep 2023 – Jul 2024',
    location: 'Burlington, ON',
    reflection: [
      "I worked on both hardware and software, writing VHDL for digital circuits and C++ APIs for Evertz's AV products.",
      'This was my first real exposure to hardware, and it completely changed the way I thought about solving problems. I had to start thinking in terms of clocks, parallel logic, limited resources, and the trade-offs between timing and space. I also learned how to use ILAs, set up useful triggers, inspect signals, and debug issues directly in the hardware. It was a very different mindset from software, but that was something I really enjoyed learning.',
      'I also had the opportunity to do a lot of C++ work, contributing to our hardware API infrastructure and learning how the software interacted with and controlled the underlying FPGA hardware. One of the things I enjoyed most was being able to use that infrastructure to improve and optimize features on the FPGA itself. I liked seeing how changes on one side could affect the other and understanding the full picture.',
      'I learned a huge amount from my manager and the people I worked with. I became more comfortable with version control, debugging, and working within a larger codebase. Overall, this role pushed me to think differently and helped me grow tremendously as an engineer.',
    ],
  },
  {
    id: 'ngwn',
    organization: 'York University, NGWN Lab',
    role: 'Research Intern',
    dateRange: 'May 2023 – Aug 2023',
    location: 'Toronto, ON',
    reflection: [
      'My research experience gave me a firsthand look at the journey from an idea to a peer-reviewed publication. I spent a significant amount of time reading papers and conducting literature reviews to understand existing work in sensing and communication systems. From there, our team identified a research gap around resource allocation and developed a novel approach for efficiently allocating spectrum and power between sensing and communication.',
      'I helped develop the solution and was responsible for writing the simulations, running experiments, and analysing the results. We then wrote our paper, and submitted it for publication with IEEE. The paper went through two rounds of feedback and revisions before eventually being published.',
      'This experience also gave me a new appreciation for mathematics and its ability to model real-world systems. Being able to represent complex sensing and communication systems mathematically, optimize how limited resources are allocated, and use those models to uncover meaningful insights was something I found genuinely fascinating.',
      'Check out the paper here:',
    ],
    publication: {
      title:
        'Joint Spectrum Partitioning and Power Allocation for Energy Efficient Semi-Integrated Sensing and Communications',
      authors: 'Ammar Mohamed A, Sylvester Aboagye, Hina Tabassum',
      venue: 'IEEE Communications Letters, 2024',
      link: 'https://ieeexplore.ieee.org/document/10516428',
    },
  },
];
