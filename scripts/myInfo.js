const myInfo = {
    name: 'Josther Sampaio fontes',
    age:{
        en: '22 years',
        pt: '22 anos'
    },
    country: { 
        en: 'Brazil', 
        pt: 'Brasil'
    },
    city: 'Barro Alto',
    state: 'BA',
    contact:{
        email: 'mailto:josthersampaiof@gmail.com',
        whatsapp: 'https://api.whatsapp.com/send/?phone=%2B5574999846773',
        instagram:'https://www.instagram.com/j.sampaiof2/',
        github: 'https://github.com/jsampaiof',
        facebook: 'https://www.facebook.com/josthersampaiofontes/',
        linkedin: 'https://www.linkedin.com/in/josther-sampaio/',
        twitter: 'https://twitter.com/j_sampaiof'
    },
    job: 'Full Stack Junior',
    technologies: 'HTML, CSS, JavaScript, Node.js, Git and GitHub',
    photo:{
        src: 'images/profile photo.webp',
        alt: 'profile photo'
    }
};

export function getMyInfo(){
    return myInfo;
}