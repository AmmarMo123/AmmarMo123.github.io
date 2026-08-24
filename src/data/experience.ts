import type { ExperienceEntry } from '../types';

export const experience: ExperienceEntry[] = [
  {
    id: 'amd',
    organization: 'AMD',
    role: 'ASIC Systems Engineer Intern',
    dateRange: 'May 2025 – Aug 2026',
    location: 'Markham, ON',
    reflection:
      "Most of my time at AMD has lived in the space between hardware and software — writing Python infrastructure to model ASIC registers so the validation team could stop hand-writing test cases and start generating them. I ended up owning the reusable API layer that 50+ automated hardware tests were eventually built on, but the more interesting work was cross-functional: chasing IP failures that spanned Design, Firmware, and Validation, where the bug was rarely where it first appeared, and landing 15+ fixes across client and server projects. I also had a hand in end-to-end silicon bring-up of a high-speed chiplet interconnect, watching a spec on paper turn into an actual link-up on the bench ahead of schedule. Leaning on GenAI tools for framework scaffolding and failure triage cut a lot of the repetitive debugging time, which freed up more of my time for the parts that actually needed judgment.",
  },
  {
    id: 'yorku-ta',
    organization: 'York University',
    role: 'Teaching Assistant, Supplemental Instructor',
    dateRange: 'Sep 2024 – Dec 2025',
    location: 'Toronto, ON',
    reflection:
      "Teaching ended up teaching me more about systems than most of my own coursework did. Across Embedded Systems, Software Tools, Digital Logic Design, and Discrete Math, I kept relearning the same lesson: if I couldn't explain memory management, a state machine, or a proof simply enough for a student who'd never seen it before, I probably didn't understand it as well as I thought I did. Supplemental instruction is a different kind of rigor than being graded yourself — it rewards clarity over cleverness, and it's humbling in a good way.",
  },
  {
    id: 'evertz',
    organization: 'Evertz Microsystems',
    role: 'FPGA Design Engineer Intern',
    dateRange: 'Sep 2023 – Jul 2024',
    location: 'Burlington, ON',
    reflection:
      "At Evertz I worked at the boundary between a microprocessor and an FPGA — writing OOP-based C++ APIs that configured and extended features over registers. The constraint that stuck with me was scarcity: FPGA resources are finite in a way server-side software rarely forces you to reckon with, so optimizing data structures to cut physical resource usage by up to 50% on some features felt like real engineering rather than premature optimization. I also spent time integrating third-party C++ libraries for visualizing FPGA data, which meant caring as much about rendering accuracy as about the underlying logic driving it.",
  },
  {
    id: 'ngwn',
    organization: 'York University, NGWN Lab',
    role: 'Research Intern',
    dateRange: 'May 2023 – Aug 2023',
    location: 'Toronto, ON',
    reflection:
      "This was the first time I worked on a problem with no existing solution to reference — just a Postdoctoral fellow, a professor, and a genuinely non-convex optimization problem in spectrum partitioning and power allocation. We leaned on fractional programming and Dinkelbach's algorithm to make it tractable, and I built the MATLAB simulations that turned the math into numbers we could actually trust. Seeing it through to a published paper was a different kind of satisfying than shipping code — slower, but more permanent.",
    publication: {
      title:
        'Joint Spectrum Partitioning and Power Allocation for Energy Efficient Semi-Integrated Sensing and Communications',
      authors: 'Ammar Mohamed A, Sylvester Aboagye, Hina Tabassum',
      venue: 'IEEE Communications Letters, 2024',
    },
  },
];
