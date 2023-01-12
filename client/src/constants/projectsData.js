import { images } from '../constants'

const projectsData = () => {
    return (
        [
            {
                title: 'IRIS Financial',
                role: 'Full Stack Developer',
                images: [images.irisFinancial], 
                summary: 'The ability to manage, track, and create your financial goals at your fingertips. Envision the future of finance.',
                jobDescription: [
                    'Created web service components with React.js and the Plaid API to facilitate secure financial data management and analysis, interacting with UI Interfaces using MongoDB, Express.js, and Node.js.',
                    'Developed and deployed a new feature that allows users to securely import transaction data from external bank accounts through the Plaid API.',
                    'Designed visually appealing and dynamic user interfaces by utilizing SCSS for design aspects and Framer-Motion for smooth and intuitive animations.',
                    'Worked on server-side Node.js and Express.js and connected to the MongoDB database through Mongoose',
                ],
                technologies: ['Node.js', 'MongoDB', 'Mongoose', 'Express.js', 'React.js', 'Plaid API', 'SCSS', 'JavaScript', 'Framer-Motion', 'React-Icons'],
                demoUrl: '#projects',
                codeUrl: "#",
                classified: true,
            },
            {
                title: 'Renée Labs',
                role: 'Software Engineer',
                images: [images.renee, images.renee1, images.renee2,] , 
                summary: "A digital assistant designed to grow with your organization's community and free your team from menial administrative tasks.",
                jobDescription: [
                    'Conducted a mobile audit and frontend overhaul of the admin console, introducing an improved cross-platform, mobile-responsive experience',
                    'Collaborated with design and backend engineer teams to implement new features and improve existing functionality using Vue.js, the CoreUI Library, and Go',
                ],
                technologies: ['Go', 'Vue.js','JavaScript', 'Docker', 'CoreUI', 'DataTables API', 'CSS'],
                demoUrl: 'https://www.myrenee.io/',
                codeUrl: "",
                classified: true,
            },
            {
                title: 'Personal Portfolio',
                role: 'Web Developer',
                images: [images.personalPortfolio, images.personalPortfolio1, images.personalPortfolio2] , 
                summary: 'A fully responsive, reactive webpage designed to showcase my expanding list of projects and skills',
                jobDescription: [
                    'Built rich visual and reusable components with the React.js framework and its related react hooks, such as useState and useEffect, to produce a scalable, single-page application',
                    'Utilized best practices in code organization, BEM naming conventions, and Higher Order Components to write clean, efficient, maintainable, and scalable code',
                    'Designed a visually stimulating and dynamic UI/UX through the Framer Motion API and SCSS preprocessor',
                ],
                technologies: ['JavaScript', 'React.js', 'SCSS', 'Framer-Motion', 'React-Icons', 'formspree.io'],
                demoUrl: '#projects',
                codeUrl: "https://github.com/caynoelani/react-portfolio",
                classified: false,
            },
        ]
    )
}

export default projectsData
