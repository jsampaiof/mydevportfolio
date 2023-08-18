const projects = [
    {
        id: 1,
        name: 'My Portifolio',
        desc: 'Portifolio desenvolvido com o intuito de apresentar todos os meus projetos, desenvolvidos ou em desenvolvimento, além de servir como uma forma de testar meus conhecimentos nas tecnologias aprendidas. O My Portfolio foi inteiramente desenvolvido por mim, desde a primeira div até suas rotas, definidas com o auxilio do express. As tecnologias utilizadas estão listadas abaixo.',
        photo:{
            src: 'images/projects thumb/mydevportfolio.webp',
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
            2: '24/03/23 - Lançamento de design responsivo',
            3: '02/05/23 - update das thumbnails',
            4: '02/05/23 - update das descrições dos projetos',
            5: '03/05/23 - update dos links dos projetos'
        },
        links:{
            site:'https://mydevportfolio.glitch.me',
            repositorio:'https://github.com/jsampaiof/mydevportfolio'
        }
    },
    {
        id: 2,
        name: 'Pure Math',
        desc: 'Conversor desenvolvido no intuito de facilitar a nossa vida, hahaha. É bem comum no dia a dia precisarmos converter algumas medidas em algum momento, e foi em um desses momentos que eu pensei: Porque não criar um conversor?, foi então que nasceu o PureMath, ou traduzindo: Pura Matematica. O projeto foi inteiramente desenvolvido por mim, desde a ideia do nome, scripts, paleta de cores, rotas e etc. As tecnologias utilizadas estão listadas abaixo.',
        photo:{
            src: 'images/projects thumb/puremath.webp',
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
            site:'https://puremath.glitch.me',
            repositorio:'https://github.com/jsampaiof/conversor-de-medidas'
        }
    },
    {
        id: 3,
        name: 'Workshop Cop Million',
        desc: 'Como fã de chicago PD, pensei em como desenvolver um projeto baseado na serie, foi então que surgiu o Workshop Million Cops. Esse é um projeto de landing page para inscrição em um workshop no intuito de entregar o passo a passo para quem deseja entrar na academia de policia, com as aulas ministradas pelo melhores policiais de chicago PD. O projeto foi inteiramente desenvolvido por mim, desde a paleta de cores, scripts e etc. As tecnologias utilizadas estão listadas abaixo.',
        photo:{
            src: 'images/projects thumb/workshop.webp',
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
            site:'https://chicagopdworkshop.glitch.me',
            repositorio:'https://github.com/jsampaiof/chicago-pd-workshop'
        }
    },
    {
        id: 4,
        name: 'YouDown - Youtube Video Downloader',
        desc: 'Sabe aquele momento que você quer baixar um video legal, mas não sabe como? Com o YouDown isso fica facil. Projeto desenvolvido utilizando uma API externa, onde é armazenado o ID do video passado ao inserir o link. Apos coletarmos o ID, requisitamos as informações do video, atraves de uma API externa; e pra manter o aplicativo seguro, a solicitação é realizada por intermedio de um servidor proxy, mantendo assim a segurança das informações, como Keys e host. Ao retorna a resposta da requisição, filtramos apenas as que queremos e por fim é retornado para o cliente, o link do video',
        photo:{
            src: 'images/projects thumb/Youdown.webp',
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
        updates:{},
        links:{
            site:'https://you-down.glitch.me',
            repositorio:'https://github.com/jsampaiof/youdown'
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