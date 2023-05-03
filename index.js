import express from 'express';
import { StatusCodes } from 'http-status-codes';
import * as projectsService from './scripts/projectsService.js';
import { getMyInfo } from './scripts/myInfo.js';

const app = express();
const PORT = process.env.PORT || 1220;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public/'));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`server running on port http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    const myInfo = getMyInfo();
    const allProject = projectsService.getProject();
    res.status(StatusCodes.OK).render('pages/home.ejs', {title: 'My Portfolio', myInfo, allProject});
});

app.get('/projects/:projectId', (req, res) => {
    const projectId = req.params.projectId
    const project = projectsService.getProjectById(projectId)
    const title = (project) ? project.name : 'Opps! Caminho errado, hihihi';
    const statuscode = (project) ? StatusCodes.OK : StatusCodes.NOT_FOUND;
    res.status(statuscode).render('pages/project.ejs', {title: title, project});
})