import express from 'express';

const app = express();
const PORT = process.env.PORT || 80;

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`);
});

app.use(express.static('public/'));

app.get('/', (req, res) => {
    res.render('pages/index.ejs');
});