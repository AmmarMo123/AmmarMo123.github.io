import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'fpga-ocr',
    title: 'FPGA Optical Character Recognition',
    description:
      'A neural network implemented in Verilog RTL on an FPGA to classify handwritten MNIST digits in hardware.',
    reflection:
      "This was my first time building a neural network from the transistor level up, in a manner of speaking — every matrix multiplication, ReLU activation, and memory access implemented as RTL rather than a framework call. Getting UART RX working reliably to feed digit images in from a touchscreen, then watching the FSM classify handwritten MNIST digits entirely in hardware, made the abstraction stack between software ML and silicon feel a lot less abstract.",
    tags: ['HW', 'ML'],
    technologies: ['Verilog', 'Python'],
    github: 'https://github.com/AmmarMo123/FPGA-Digit-Classifier',
    image: {
      placeholderLabel: 'FPGA OCR',
      aspectRatio: '16 / 9',
      src: 'projects/fpga-ocr.png',
    },
  },
  {
    id: 'fpga-tetris',
    title: 'FPGA Tetris',
    description:
      'An FPGA-based Tetris game with real-time gameplay driven by a state machine and displayed via VGA.',
    reflection:
      "Built with a partner on a DE10-Lite board, this was a crash course in the difference between writing game logic in software and writing it as a state machine with no call stack to lean on. Every falling piece, collision check, and line clear had to be expressed as hardware state transitions, with gameplay rendered live over VGA — no compiler forgiving a sloppy design here.",
    tags: ['HW'],
    technologies: ['Verilog'],
    github: 'https://github.com/AmmarMo123/FPGA-tetris',
    image: {
      placeholderLabel: 'FPGA Tetris',
      aspectRatio: '16 / 9',
      videoSrc: 'projects/fpga-tetris.mp4',
    },
  },
  {
    id: 'pipelined-cpu',
    title: 'Pipelined CPU',
    description:
      'A pipelined 32-bit RISC-V processor built in Verilog with a full instruction/execute/writeback datapath.',
    reflection:
      "Designing a pipelined RISC-V processor in Verilog meant confronting pipeline hazards directly instead of reading about them in a textbook. Fetch, decode, execute, memory, writeback — each stage is straightforward in isolation, but making them work together correctly across a 32-bit datapath, without silently corrupting state on a hazard, is where the actual learning happened.",
    tags: ['HW'],
    technologies: ['Verilog', 'RISC-V'],
    github: 'https://github.com/AmmarMo123/CPU-in-verilog',
    image: {
      placeholderLabel: 'Pipelined CPU',
      aspectRatio: '16 / 9',
      src: 'projects/pipelined-cpu.png',
    },
  },
  {
    id: 'study-spot',
    title: 'Study Spot',
    description:
      'A web app helping York University students find free classrooms for studying, used by 5000+ students.',
    reflection:
      "Study Spot came out of a genuinely annoying problem: not knowing which YorkU classrooms were actually free to study in. Built with two teammates using official YorkU scheduling data, it's now used by over 5,000 students — which taught me more about the unglamorous parts of shipping software, uptime, real users hitting edge cases, actually maintaining something, than any class project could.",
    tags: ['SW'],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Python',
      'Flask',
      'SQL',
    ],
    github: 'https://github.com/AmmarMo123/StudySpots',
    image: {
      placeholderLabel: 'Study Spot',
      aspectRatio: '16 / 9',
      videoSrc: 'projects/study-spot.mp4',
    },
  },
  {
    id: 'asl-interpreter',
    title: 'Sign Language Interpreter',
    description:
      'A computer-vision web app that translates ASL hand gestures into English text in real time.',
    reflection:
      "I wanted to see if I could make sign language recognition accessible without specialized hardware — just a webcam, OpenCV, and MediaPipe for hand tracking, feeding into a SciKit model trained to recognize ASL alphabet gestures. Wrapping it in Flask and React made it usable directly in a browser, which mattered more to me than squeezing out marginal accuracy gains.",
    tags: ['SW', 'ML'],
    technologies: [
      'Python',
      'Flask',
      'React',
      'OpenCV',
      'SciKit',
      'NumPy',
      'MediaPipe',
      'Matplotlib',
    ],
    github: 'https://github.com/AmmarMo123/ASL-live-translator',
    image: {
      placeholderLabel: 'ASL Interpreter',
      aspectRatio: '16 / 9',
      videoSrc: 'projects/asl-interpreter.mp4',
      objectPosition: 'center 80%',
    },
  },
  {
    id: 'dafp',
    title: 'Blockchain Fundraising Platform',
    description:
      'A decentralized fundraising platform where investors fund tokenized startup DAOs with USDC. Hack the North 2024 winner.',
    reflection:
      "Built in 36 hours at Hack the North 2024 with a team of four, this was my first real foray into Solidity — a decentralized fundraising platform where investors fund tokenized startup DAOs with USDC. Winning mattered less than what it forced: learning smart contract patterns fast enough to ship something that actually worked under a deadline, with three other people relying on the pieces I owned.",
    tags: ['SW'],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'TailwindCSS',
      'Solidity',
    ],
    github: 'https://github.com/AmmarMo123/DAFP',
    image: {
      placeholderLabel: 'DAFP',
      aspectRatio: '16 / 9',
      videoSrc: 'projects/dafp.mp4',
    },
  },
];
