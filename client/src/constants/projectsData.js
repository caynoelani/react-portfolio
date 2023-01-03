import { images } from '../constants'

const projectsData = () => {
    return (
        [
            {
                title: 'Personal Portfolio',
                role: 'Software Engineer',
                images: [images.personalPortfolio, images.personalPortfolio1, images.personalPortfolio2] , 
                summary: 'A fully responsive, reactive webpage designed to showcase my expanding list of projects and skills',
                technologies: ['JavaScript', 'React', 'React-Icons', 'Framer-Motion', 'SASS/SCSS', 'formspree', 'CSS', 'HTML'],
                demoUrl: '#',
                codeUrl: "https://github.com/caynoelani/react-portfolio",
                classified: false,
            },
            {
                title: 'Renée Admin Console',
                role: 'Software Engineer',
                images: [images.renee, images.renee1, images.renee2,] , 
                summary: 'Conducted a mobile audit and frontend overhaul, introducing a cross-platform, mobile-responsive experience',
                technologies: ['Go', 'JavaScript', 'Vue','CoreUi', 'CSS', 'HTML'],
                demoUrl: 'https://www.myrenee.io/',
                codeUrl: "",
                classified: true,
            },
        ]
    )
}

export default projectsData
