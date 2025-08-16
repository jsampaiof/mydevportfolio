import { StatusCodes } from 'http-status-codes';
import * as projectsService from './src/scripts/projectsService.js';
import { getMyInfo } from './src/scripts/myInfo.js';

import express from 'express';
import path, { dirname } from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.use(express.static('src'));

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