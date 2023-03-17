const projects = [
    {
        id: 1,
        name: 'My Portifolio',
        desc: 'aaaaa',
        photo:{
            src: 'images/02.webp',
            alt: 'Project thumbnail'
        }
    },
    {
        id: 2,
        name: 'Pure Math',
        desc: 'aaaaaa',
        photo:{
            src: 'images/02.webp',
            alt: 'Project thumbnail'
        }
    },
    {
        id: 3,
        name: 'Workshop Cop Million',
        desc: 'aaaaaa',
        photo:{
            src: 'images/02.webp',
            alt: 'Project thumbnail'
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