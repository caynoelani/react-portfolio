import { images } from '../constants'

const projectsData = () => {
    return (
        [
            {
                title: 'Renée Admin Console',
                role: 'Software Engineer',
                images: [images.renee, images.renee1, images.renee2,] , 
                summary: "A digital assistant designed to grow with an organization's community and free your team from menial administrative tasks.",
                jobDescription: [
                    'Conducted a mobile audit and frontend overhaul, introducing a cross-platform, mobile-responsive experience',
                    'Collaborated with design and backend engineer teams to implement new features and improve existing functionality using, Vue.js, the CoreUI Library, and Go',
                ],
                technologies: ['Go', 'JavaScript', 'Vue.js','CoreUi', 'CSS'],
                demoUrl: 'https://www.myrenee.io/',
                codeUrl: "",
                classified: true,
            },
            {
                title: 'Personal Portfolio',
                role: 'Software Engineer',
                images: [images.personalPortfolio, images.personalPortfolio1, images.personalPortfolio2] , 
                summary: 'A fully responsive, reactive webpage designed to showcase my expanding list of projects and skills',
                jobDescription: [
                    'Built rich visual and reusable components with the React.js framework and its related react hooks, such as useState and useEffect, to produce a scalable, single-page application',
                    'Utilized best practices in code organization, as well as BEM naming conventions and Higher Order Components, to write clean, efficient, maintainable, and scalable code',
                    'Designed a visually stimulating and dynamic UI/UX through the Framer Motion Library and SCSS preprocessor',
                ],
                technologies: ['JavaScript', 'React.js', 'Framer-Motion', 'SCSS',  'React-Icons', 'formspree'],
                demoUrl: '#',
                codeUrl: "https://github.com/caynoelani/react-portfolio",
                classified: false,
            },
        ]
    )
}

export default projectsData
