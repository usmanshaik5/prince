/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};
const greeting = {
  username: "Usman Shaik",
  title: "Hi all, I'm Usman Shaik",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "",
  linkedin: "https://www.linkedin.com/in/usman-shaiik/",
  gmail: "usmanshaiik59@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    " I am an Electrical Engineering Student with a solid foundation in HTML, CSS, Bootstrap, JavaScript,React.js, Node.js, Nest.js, TypeORM, TypeScript, SQL, Java, and Big Data. Eager to apply my technical skills and innovative mindset in a collaborative environment where i can contribute to impactful projects, further develop my abilities, and drive meaningful results"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/me.jpg")
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡Develop responsive and interactive user interfaces using HTML, CSS, JavaScript, React.js, and Bootstrap."
    ),
    emoji(
      "⚡ Create web applications with a focus on AI integration and seamless user experiences.Design and implement frameworks for static analysis of Android application vulnerabilities."
    ),
    emoji(
      "⚡Analyze and process large-scale datasets using Big Data tools like Hadoop, Hive, Spark, and Kafka."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "nestjs",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "typeorm",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "mui",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "bigdata",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "iot",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "ai",
      fontAwesomeClassname: "fas fa-brain"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "GOVERNMENT HIGH SCHOOL",
      logo: require("./assets/images/gv.png"),
      subHeader: "6th Class - 10 Class",
      duration: "2015-2019",
      desc: "Completed 10th-grade education with a perfect score of 10 points"
      // descBullets: ["Lorem ipsum dolor sit am et, consectetur adipiscing elit"]
    },
    {
      schoolName: "Rajiv Gandhi University of Knowledge Technologies",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Intermediate",
      duration: "September 2019 - April 2021",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        " Completed Intermediate education with 84% at IIIT RGUKT RK Valley, Kadapa."
      ]
    },
    {
      schoolName: "Rajiv Gandhi University of Knowledge Technologies",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Technology",
      duration: "September 2021 - April 2025",
      desc: "Pursuing 4th year at IIIT RGUKT RK Valley, Kadapa",
      descBullets: [
        " IoT systems and industrial applications with design thinking (Feb 2024- May 2024)",
        " Workshop on Automated Fire Extinguishing Robot Design (May 2024- June 2024)"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "Notify Suite Technology Pvt Ltd",
      companylogo: require("./assets/images/logo.png"),
      date: " Sep 2024- Present",
      desc: "Currently working on front-end, back-end, and web widgets for personalized notifications.",
      descBullets: ["Enhanced communication strategies for user engagement."]
    },
    {
      role: "Graphic Designer Intern",
      company: " GAO Tek",
      companylogo: require("./assets/images/gaotek.png"),
      date: " Sep 2024- Dec 2024",
      desc: "Created web graphics and user interfaces for engaging designs.",
      descBullets: [
        "Collaborated with the team to refine visual assets aligning with project goals."
      ]
    },
    {
      role: " Big Data Analyst Course",
      company: " iNeuron",
      companylogo: require("./assets/images/ineu.png"),
      date: "June 2024- Dec 2024",
      desc: "Learned Hadoop, Hive, Spark, and Kafka for data analytics. ",
      descBullets: [
        "Focused on real-time data solutions to generate business insights."
      ]
    },
    {
      role: " Web Development Internship",
      company: " Study Comrade",
      companylogo: require("./assets/images/sc.png"),
      date: " January 2024- July 2024",
      desc: " Completed 500+ hours in Node.js, leading responsive web projects.",
      descBullets: [" Directed a key project improving efficiency by 80%."]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      // projectName: "Saayahealth",
      projectDesc: "Multi-Portal Website with AI integration with Voice Over"
      // footerLink: [
      //   {
      //     // name: "Visit Website",
      //     // url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      // projectName: "Saayahealth",
      projectDesc:
        "Responsive Web Projects like ChatBot AI, JobFinder, Shopping Website, Healthcare Website"
      // footerLink: [
      //   {
      //     // name: "Visit Website",
      //     // url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      // projectName: "Saayahealth",
      projectDesc:
        " Framework for Static Analysis of vulnerabilities in Android Applications , Chatting Application using Java Swing"
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      // projectName: "Saayahealth",
      projectDesc:
        "  Rule Engine with AST , Real-Time Data Processing System for Weather Monitoring with Rollups and Aggregates , Rule Based Access Control"
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Codsoft",
      subtitle: "Artificial Intelligence",
      image: require("./assets/images/a.png"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "EDX",
      subtitle:
        " IoTx: IoT Systems and Industrial Applications with Design Thinking",
      image: require("./assets/images/b.png"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },

    {
      title: "EDX",
      subtitle: " MatlabeOctaveBeginnersX MATLAB and Octave for Beginners",
      image: require("./assets/images/d.png"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Great Learning",
      subtitle: "Introduction to Matlab",
      image: require("./assets/images/e.png"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Great Learning",
      subtitle: "Java Programming",
      image: require("./assets/images/f.png"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Great Learning",
      subtitle: "Microsoft Azure Essentials",
      image: require("./assets/images/g.png"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "MathWorks",
      subtitle: "Matlab ONRAMP",
      image: require("./assets/images/h.png"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Study Comrade",
      subtitle: "Web Development Internship",
      image: require("./assets/images/i.png"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Study Comrade",
      subtitle: "Frontend Workshop",
      image: require("./assets/images/j.png"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Karthikeya Solutions",
      subtitle: "VLSI",
      image: require("./assets/images/k.png"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "UNSTOP",
      subtitle: "TATA CRUCIABLE CAMPUS QUIZ",
      image: require("./assets/images/l.png"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "NAUKRI CAMPUS",
      subtitle: "Young Turks",
      image: require("./assets/images/m.png"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "IBM SKILLS Build",
      subtitle: "Artificial Intelligence Fundamentals",
      image: require("./assets/images/n.jpg"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "RAJIV GANDHI UNIVERSITY OF KNOWLEDGE TECHNOLOGIES",
      subtitle: "IOT FUSION WORKSHOP",
      image: require("./assets/images/o.jpg"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "RAJIV GANDHI UNIVERSITY OF KNOWLEDGE TECHNOLOGIES",
      subtitle: "SMART INDIA HACKATHON 2024",
      image: require("./assets/images/p.jpg"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      image: require("./assets/images/me.jpg") // Ensure the path is correct
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Assuming you're using this in a React component and want to display the image only:
function BlogImage() {
  return (
    <div>
      <img src={blogSection.blogs[0].image} alt="Blog Post" />
    </div>
  );
}

export default BlogImage;

// Talks Sections

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7075505956",
  email_address: "usmanshaiik59@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  talkSection,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
