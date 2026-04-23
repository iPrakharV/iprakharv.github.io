export const experience = [
  {
    id: 'mie',
    role: 'Software Developer Intern',
    company: 'Medical Informatics Engineering',
    url: 'https://www.mieweb.com/',
    location: 'Fort Wayne, IN',
    period: 'May 2024 - Apr 2025',
    bullets: [
      'Built a real-time voice transcription system for healthcare documentation using Python on Raspberry Pi with Google SpeechRecognition, Mozilla DeepSpeech, and OpenAI WhisperAI, integrated with EHR via Docker for scalable deployment.',
      'Designed a smart door lock system with a Python backend on Raspberry Pi and ESP32 for AES-encrypted communication, integrated with Apple Wallet via PKI standards and NFC/RFID for secure access control.',
      'Built MQTT-based IoT infrastructure with machine learning models for predictive security analytics across critical environments.',
    ],
  },
  {
    id: 'gdg',
    role: 'Campus Organizer',
    company: 'Google Developer Groups on Campus',
    url: 'https://gdg.community.dev/',
    location: 'Purdue University Fort Wayne, IN',
    period: 'Aug 2024 - Present',
    bullets: [
      'Lead the GDG chapter at Purdue University Fort Wayne, organizing monthly developer meetups, technical workshops, and collaborative learning sessions.',
      'Built programming that serves beginners and experienced developers, from first open-source contributions to applied ML walkthroughs.',
      'Delivered talks on GitHub workflows, open-source contribution, and developer tooling to cross-disciplinary audiences with no prior experience.',
    ],
  },
  {
    id: 'codeday',
    role: 'Core Team Lead',
    company: 'CodeDay Lucknow',
    url: 'https://www.codeday.org',
    location: 'Lucknow, India',
    period: 'Apr 2023 - Present · 3+ yrs',
    bullets: [
      'Organized and managed CodeDay Lucknow, a 24-hour offline hackathon for high school students from minority groups, focused on diversity and inclusion in CS.',
      'Led the second edition of CodeDay Lucknow 2024, overseeing event logistics, social media, and sponsor partnerships.',
      'Previously served as Regional Manager (Jul 2023 - Jul 2024), collaborating with sponsors and ensuring seamless attendee experiences.',
    ],
  },
]

export const otherRoles = [
  {
    id: 'ra',
    role: 'Resident Assistant',
    company: 'Purdue University',
    url: 'https://www.pfw.edu',
    location: 'Fort Wayne, IN',
    period: 'Mar 2024 - May 2025',
    bullets: [
      'Cultivated a residential community by providing peer support, resolving conflicts, and connecting residents to campus resources.',
      'Managed on-call emergencies and collaborated on administrative tasks across the residence hall.',
    ],
  },
  {
    id: 'robotics',
    role: 'Robotics Developer, Founder of Team Agni',
    company: 'City Montessori School',
    url: '#',
    location: 'Lucknow, India',
    period: 'Mar 2016 - Apr 2023 · 7 yrs',
    bullets: [
      'Founded Team Agni, winning 1st place at Robotex India 2018 (3kg Sumo) and Techfest 2019 Lucknow Zonals (Maze Solver).',
      'Ranked 6th among 35K+ participants from Asia at IIT Bombay Techfest 2020.',
      'Led Neo-Tech Society (400+ members), coaching students in competitive coding, web design, AI, and video production.',
    ],
  },
]

export const projects = [
  {
    id: 'safefall',
    name: 'SafeFall',
    description:
      'Real-time fall detection system using pose analysis. Enhanced accuracy by 30% with MediaPipe and PyTorch, reduced false positives by 25%, and deployed responsive alerts for instant notification.',
    tech: ['OpenCV', 'MediaPipe', 'PyTorch', 'JavaScript', 'Raspberry Pi', 'Firebase'],
    award: "People's Choice — Regeneron Health Tech Hackathon",
    period: 'May 2024',
    url: '#',
  },
  {
    id: 'skycanvas',
    name: 'SkyCanvas',
    description:
      'Drone-based aerial imaging platform processing real-time positioning data with 95% image fidelity accuracy. Flask control interface improved operational efficiency by 30%.',
    tech: ['Flask', 'Python', 'OpenCV', 'JavaScript', 'HTML'],
    period: 'April 2024',
    url: '#',
  },
  {
    id: 'mailmark',
    name: 'MailMark',
    description:
      'Cross-platform email branding tool for professionals. 60 FPS, sub-2-second startup, serving 1,000+ users. Received ₹180,000 in initial angel funding.',
    tech: ['Flutter', 'Firebase', 'Dart', 'Vercel'],
    period: 'March 2024',
    url: '#',
  },
  {
    id: 'troonomega',
    name: 'TronooMega',
    description:
      'Autonomous vehicle system for real-world traffic light and pedestrian detection with Arduino-based collision avoidance. Improved trajectory adjustments by 25%.',
    tech: ['Python', 'Java', 'Arduino', 'OpenCV'],
    award: '2nd Place — IARRC 2019, University of Waterloo',
    period: '2020',
    url: '#',
  },
]

export const skills = {
  languages: [
    'Python',
    'JavaScript',
    'Java',
    'C++',
    'Dart',
    'Swift',
    'HTML5',
    'CSS3',
    'Bash',
    'LaTeX',
  ],
  frameworks: [
    'Flutter',
    'Next.js',
    'Flask',
    'Meteor.js',
    'PyTorch',
    'OpenCV',
    'Firebase',
    'Docker',
    'Git',
  ],
  hardware: ['Raspberry Pi', 'ESP32', 'Arduino', 'IoT Systems', 'NFC / RFID', 'MQTT'],
  domains: [
    'Full-Stack Development',
    'Machine Learning',
    'AI Systems',
    'Embedded Systems',
    'Healthcare Tech',
    'Developer Infrastructure',
  ],
}

export const education = [
  {
    id: 'purdue',
    school: 'Purdue University',
    degree: 'Bachelor of Science, Computer Science Honors',
    minor: 'Business Studies & Mathematics Minor',
    period: 'Aug 2023 — May 2027',
    location: 'Fort Wayne, IN',
    url: 'https://www.pfw.edu',
  },
  {
    id: 'cms-isc',
    school: 'City Montessori School',
    degree: 'Indian School Certificate (ISC)',
    minor: 'Mathematics, Science & Computer Science',
    period: 'Mar 2021 — Mar 2023',
    location: 'Lucknow, India',
    url: '#',
  },
]

export const blogPosts = [
  {
    id: 'voice-transcription',
    title: 'Building Real-Time Voice Transcription for Healthcare',
    excerpt:
      'How we built a medical voice transcription system at MIE using WhisperAI, DeepSpeech, and custom ASR pipelines — and integrated it into an EHR platform valued at $15M+.',
    date: 'Coming Soon',
    readTime: '8 min',
    tag: 'Engineering',
  },
  {
    id: 'codeday-india',
    title: 'Community at Scale: Running CodeDay Across India',
    excerpt:
      'Lessons from organizing hackathons for 5,000+ students across India — logistics, sponsors, and creating meaningful learning experiences with zero budget.',
    date: 'Coming Soon',
    readTime: '6 min',
    tag: 'Community',
  },
  {
    id: 'iot-security',
    title: 'AES Encryption on Raspberry Pi 5 & ESP32',
    excerpt:
      'A deep dive into building a secure IoT access control system with Apple Wallet integration — architecture decisions, pitfalls, and everything I learned.',
    date: 'Coming Soon',
    readTime: '10 min',
    tag: 'IoT & Security',
  },
]
