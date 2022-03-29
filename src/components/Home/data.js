// src/components/data.js
// Exports data to be used in expandable sections of the App.js components.

export const projects = [
    {
        title: "Personal Website",
        subtitle: "Node.js & React",
        description:
            "The site you see here! Built on Node.js and React, this is my first attempt at proper front-end work! It's purpose is to showcase my work and help me learn Javascript and CSS styling.",
        image: "./website.png",
        link: "https://github.com/jperson1/jperson_site_build", 
    },
    {
        title: "BracketFy - Spotify Bracket Generator",
        subtitle: "Django & React",
        description:
            "BracketFy is a site that allows you to create a bracket of songs and vote on them in a room with other users. Designed with agile methodology in a team of four over the course of a semester.",
        image: "./Bracketfy.gif",
        link: "https://github.com/andrewloftus24/CMSC-447-Spotify-04",
    },
    {
        title: "Stock Prediction with Regression Modeling",
        subtitle: "JupyterLab & Python",
        description:
            "A comprehensive Notebook that utilizes regression models on Apple stock (AAPL) to predict future pricing. Performace measured with MSE, RMSE, and MAE scoring types.",
        image: "./hyperparameters.png",
        link: "#projects", 
    },
    {
        title: "The Ethics of Prenatal Genetic Manipulation",
        subtitle: "Ethical Analysis",
        description:
            "A technical paper covering the ethical aspects of prenatal genetic manipulation, as enabled by gene editing technologies such as CRISPR. Discusses pros and cons from several moral perspectives.",
        image: "./paper.png", 
        link: "#projects", 
    },
];

export const skills = [
    "Python",
    "JupyterLab",
    "JavaScript",
    "React",
    "C++ / C",
    "Node.js",
    "MySQL",
    "MongoDB",
];

export const courses = [
    {
        title: "Software Engineering",
        subtitle: "CMSC 447",
        description: "Basic concepts of software engineering, including software life cycle, requirements analysis and software design methods.",
    },
    {
        title: "Data Science",
        subtitle: "CMSC 462",
        description: "Data science is a field that involves data manipulation, analysis, and presentation, all at scale. Involves MySQL, MongoDB, and Spark.",
    },
    {
        title: "Design and Analysis of Algorithms",
        subtitle: "CMSC 441",
        description: "This course studies fundamental algorithms, strategies for designing algorithms, and mathematical principles of algorithm analysis.",
    },
    {
        title: "Data Structures",
        subtitle: "CMSC 341",
        description: "This course studies a range of data structures with an emphasis on object-oriented approaches. Topics include asymptotic analysis, binary search trees, heaps and priority queues, and hash tables.",
    },
    {
        title: "Artificial Intelligence",
        subtitle: "CMSC 471",
        description: "This course provides a broad introduction to artificial intelligence, its sub-fields and their applications. Topics include problem-solving approaches to common applications of AI.",
    },
    {
        title: "Machine Learning",
        subtitle: "CMSC 478",
        description: "Intro to machine learning. Topics covered include decision trees, perceptrons, logistic regression, linear and non-linear regression, neural networks, genetic algorithms, reinforcement learning, and clustering.",
    },
    {
        title: "Computer Architecture",
        subtitle: "CMSC 411",
        description: "This course covers the design of complex computer systems. All parts of the computer system - CPU, memory and input/output - are discussed in detail. "
    },
    {
        title: "Social/Ethical Issues in Information Technology",
        subtitle: "CMSC 304",
        description: "A course that reviews social issues and the ethical impact of information technology. The course examines the policy issues that relate to persona, privacy, rights of access, security, transborder information flow and confidentiality."
    },
    {
        title: "Linear Algebra",
        subtitle: "MATH 411",
        description: "Mathematical analysis of linear algebra. Topics include finite-dimensional vector spaces, subspaces, basis, linear transformations, matrices, linear functionals, the dual-basis theorem, quotient spaces, determinants, and eigenvalues.",
    },
    
];

export const jobs = [
    {
        company: "New Hope Health Services, LLC",
        place: "Washington, D.C.",
        title: "Quality Assurance Officer",
        time: "October 2020 - Present",
        link: "http://www.nhh-services.com/",
        description: ["Recurring duties include mental health note auditing and meeting agenda composition. Facilitated the transition of patient files from the DC DBH database to the New Hope database. Reduced average time to transfer insurance/treatment information from 15 minutes to 10 minutes."],
    },
    {
        company: "UMBC CSEE Department",
        place: "Baltimore, MD",
        title: "Teaching Fellow",
        time: "September - December 2021",
        link: "https://www.csee.umbc.edu/",
        description: ["Managed the grading of 20-30 assignments per week for Social and Ethical Issues in IT. Analyzed papers based on students' technical writing and use of ethical reasoning. Advised students on attention to detail and logical argumentative reasoning."],
    },
    {
        company: "UMBC Residential Life",
        place: "Baltimore, MD",
        title: "Project Assistant",
        time: "June - August 2020",
        link: "https://reslife.umbc.edu/",
        description: ["Conducted routine and emergency maintenance in student residences on campus. Completed several week-long assignments a few days in advance. Changed 600 door batteries and built and replaced 60 window screens in three business weeks."],
    },
    {
        company: "Champion Martial Arts Studio",
        place: "Gaithersburg, MD",
        title: "Taekwondo Instructor",
        time: "June 2014 - August 2020",
        link: "https://www.champma.net/",
        description: ["I practiced with the studio for several years before recieving my first degree black belt and began teaching. I then taught students of varying ages and skill levels along a team of other instructors."],
    },
];

export const git = {
    link: "https://github.com/jperson1",
    logo: "./GitHub-Mark-32px.png",
}

export const linkedin = {
    link: "https://www.linkedin.com/in/james-person-85aa1422b/",
    logo: "./LI-In-Bug.png",
}