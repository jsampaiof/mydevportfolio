const myInfo = {
    name: 'Josther Sampaio Fontes',
    age:{
        en: '23 years',
        pt: '23 anos'
    },
    country: { 
        en: 'Brazil', 
        pt: 'Brasil'
    },
    city: 'Barro Alto',
    state: 'BA',
    contact:{
        email:{
            href:'mailto:josthersampaiof@gmail.com',
            src:'/images/gmail icon.webp'
        },
        whatsapp:{
            href:'https://api.whatsapp.com/send/?phone=%2B5574999846773',
            src: '/images/WhatsApp icon.webp'
        },
        instagram:{
            href:'https://www.instagram.com/j.sampaiof2/',
            src: '/images/Instagram icon.webp'
        },
        github:{
            href:'https://github.com/jsampaiof',
            src: '/images/github icon.webp'
        },
        facebook: {
            href:'https://www.facebook.com/josthersampaiofontes/',
            src:'/images/facebook icon.webp'
        },
        linkedin: {
            href:'https://www.linkedin.com/in/josther-sampaio/',
            src: '/images/LinkedIn icon.webp'
        },
        twitter: {
            href:'https://twitter.com/j_sampaiof',
            src:'/images/twitter icon.webp'
        }
    },
    job: 'Desenvolvedor Javascript',
    technologies: 'JavaScript, Node.js, Git e GitHub, HTML, CSS, DB(breve)',
    photo:{
        src: 'images/profile photo.webp',
        alt: 'profile photo'
    }
};

export function getMyInfo(){
    return myInfo;
};