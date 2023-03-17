const projects = [
    {
        id: 1,
        name: 'My Portifolio',
        desc: 'aaaaa'
    },
    {
        id: 2,
        name: 'Pure Math',
        desc: 'aaaaaa'
    },
    {
        id: 3,
        name: 'Workshop Cop million',
        desc: 'aaaaaa'
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