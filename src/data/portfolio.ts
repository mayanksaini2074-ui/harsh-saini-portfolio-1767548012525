import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Harsh Saini",
    "title": "Hardware Design Engineer",
    "email": "saini.harsh.in@gmail.com",
    "phone": "+91-8053677129",
    "linkedin": "linkedin.com/in/sainiharsh-in",
    "github": "github.com/harsh-hw-dev",
    "location": "",
    "summary": "Hardware design engineer with hands-on experience in embedded systems and PCB layout, skilled in hardware development and system integration, eager to take on challenging roles and opportunities in technology development."
  },
  "experience": [
    {
      "title": "Hardware Design Engineer (R&D)",
      "company": "Winet Infratel Private Limited, Noida",
      "dates": "July 2025 – Present",
      "description": "Designing EVSE chargers and developing custom PCB layouts for control and communication systems.",
      "highlights": [
        "Designed EVSE chargers including 3.3kW and 7.4kW models with Type-2 interface",
        "Developed custom PCB layouts using KiCad for ESP32-based systems",
        "Involved in hardware development for 10kw/22kw smart charging stations"
      ]
    },
    {
      "title": "Hardware Engineer (R&D)",
      "company": "Cikitsam, Kurukshetra",
      "dates": "Nov 2024 – Feb 2025",
      "description": "Worked on HRV monitoring device development and hardware troubleshooting.",
      "highlights": [
        "Developed an HRV monitoring device using ESP32-C3 Xiao and MAX30102 sensor",
        "Troubleshot hardware and serial monitoring issues",
        "Collaborated on prototype performance optimization"
      ]
    },
    {
      "title": "VLSI Design Intern (R&D)",
      "company": "Department of Electronic Science, Kurukshetra",
      "dates": "July 2024 – Aug 2024",
      "description": "Designed and simulated ASIC circuits.",
      "highlights": [
        "Designed and simulated ASIC circuits using Cadence Virtuoso",
        "Created schematics, layouts, and validated designs through simulations",
        "Improved circuit performance and manufacturability"
      ]
    },
    {
      "title": "Project Intern (PPC)",
      "company": "Maruti Suzuki India Limited, Gurugram",
      "dates": "Aug 2023 – Sept 2023",
      "description": "Optimized production workflows and improved decision-making tools.",
      "highlights": [
        "Optimized automotive production workflows by analyzing automation sequences",
        "Improved decision-making tools and control logic to enhance efficiency"
      ]
    }
  ],
  "education": [
    {
      "degree": "B.Tech in Electronics and Communication Engineering",
      "institution": "UIET, Kurukshetra University",
      "years": "Sept 2022 – July 2025",
      "gpa": "6.0/10"
    },
    {
      "degree": "Diploma in Engineering",
      "institution": "Govt. Polytechnic Nilokheri",
      "years": "Sept 2019 – Sept 2022",
      "gpa": "8.0/10"
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": [
    {
      "name": "60W SMPS using Flyback Topology",
      "description": "Designed and implemented a 60W SMPS circuit for isolated power conversion",
      "technologies": [
        "Flyback topology",
        "High-frequency switching",
        "Feedback control"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "CMOS Two-Stage Operational Amplifier",
      "description": "Designed and simulated a CMOS two-stage op-amp in 180nm technology",
      "technologies": [
        "Cadence Virtuoso",
        "Schematic capture",
        "Performance verification"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "CNC Machine for 2D Drawing",
      "description": "Designed and built a 2D CNC drawing machine for precise motion control",
      "technologies": [
        "Arduino Nano",
        "Stepper motors",
        "CNC Shield"
      ],
      "link": "",
      "github": ""
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "floating-shapes",
  "about": "modern",
  "experience": "detailed",
  "projects": "showcase",
  "skills": "categories",
  "skillsDisplay": "hero",
  "contact": "card",
  "colorPalette": "slate"
};
