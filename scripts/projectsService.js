const projects = [
    {
        id: 1,
        name: 'My Portifolio',
        desc: 'Portifolio desenvolvido com o intuito de apresentar todos os meus projetos, desenvolvidos ou em desenvolvimento, além de servir como uma forma de testar meus conhecimentos nas tecnologias aprendidas. O My Portfolio foi inteiramente desenvolvido por mim, desde a primeira div até suas rotas, definidas com o auxilio do express. As tecnologias utilizadas estão listadas abaixo.',
        photo:{
            src: 'images/02.webp',
            alt: 'Project thumbnail'
        },
        techs:{
            html:{
                name:'HTML',
                src:'/images/technologies/HTML 5.webp',
                alt:'HTML 5'
            },
            css:{
                name:'CSS',
                src: '/images/technologies/CSS 3.webp',
                alt: 'CSS 3'
            },
            javascript:{
                name:'javascript',
                src: '/images/technologies/javascript.webp',
                alt: 'JavaScript'
            },
            git:{
                name:'git',
                src: '/images/technologies/git.webp',
                alt: 'Git'
            },
            node:{
                name:'nodejs',
                src: '/images/technologies/nodejs.webp',
                alt: 'Node.JS'
            },
            express:{
                name:'express',
                src: '/images/technologies/express-js.webp',
                alt: 'Express'
            },
            ejs:{
                name:'ejs',
                src: '/images/technologies/ejs.webp',
                alt: 'EJS'
            }
        },
        updates:{
            1: '17/03/23 - Atualização do design da página inicial',
            2: '24/03/23 - Lançamento de design responsivo'
        },
        links:{
            site:'https://mydevportfolio.tk',
            repositorio:'https://github.com/jsampaiof/mydevportfolio'
        }
    },
    {
        id: 2,
        name: 'Pure Math',
        desc: 'aaaaaa',
        photo:{
            src: 'images/02.webp',
            alt: 'Project thumbnail'
        },
        techs:{
            html:{
                name:'HTML',
                src:'/images/technologies/HTML 5.webp',
                alt:'HTML 5'
            },
            css:{
                name:'CSS',
                src: '/images/technologies/CSS 3.webp',
                alt: 'CSS 3'
            },
            javascript:{
                name:'javascript',
                src: '/images/technologies/javascript.webp',
                alt: 'JavaScript'
            },
            git:{
                name:'git',
                src: '/images/technologies/git.webp',
                alt: 'Git'
            }
        },
        updates:{},
        links:{
            site:'https://puremath.tk',
            repositorio:'https://github.com/jsampaiof/conversor-de-medidas'
        }
    },
    {
        id: 3,
        name: 'Workshop Cop Million',
        desc: 'aaaaaa',
        photo:{
            src: 'images/02.webp',
            alt: 'Project thumbnail'
        },
        techs:{
            html:{
                name:'HTML',
                src:'/images/technologies/HTML 5.webp',
                alt:'HTML 5'
            },
            css:{
                name:'CSS',
                src: '/images/technologies/CSS 3.webp',
                alt: 'CSS 3'
            },
            javascript:{
                name:'javascript',
                src: '/images/technologies/javascript.webp',
                alt: 'JavaScript'
            },
            git:{
                name:'git',
                src: '/images/technologies/git.webp',
                alt: 'Git'
            },
            node:{
                name:'nodejs',
                src: '/images/technologies/nodejs.webp',
                alt: 'Node.JS'
            }
        },
        updates:{},
        links:{
            site:'https://mydevportfolio.tk',
            repositorio:'https://github.com/jsampaiof/chicago-pd-workshop'
        }
    }
];

function getProject(){
    return projects;
};

function getProjectById(projectId){
    return projects.find((project) => {
        return Number(projectId) === project.id;
    });
};

export {getProject, getProjectById};