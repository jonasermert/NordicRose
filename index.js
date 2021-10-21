const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;
let data = [
  {
    id: 0,
    url: "/img1.jpg",
    title:
      "A few words about this blog platform, Ghost, and how this site was made",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "Apr 15, 2020",
    duration: 4,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
  {
    id: 1,
    url: "/img2.jpg",
    title: "Here are some things you should know regarding how we work",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "June 25, 2020",
    duration: 5,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
  {
    id: 2,
    url: "/img3.jpg",
    title:
      "Granny gives everyone the finger, and other tips from OFFF Barcelona",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "Aug 30, 2020",
    duration: 3,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
  {
    id: 3,
    url: "/img4.jpg",
    title: "Hello world, or, in other words, why this blog exists",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "Sep 12, 2020",
    duration: 3,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
  {
    id: 4,
    url: "/img5.jpg",
    title: "Here are some things you should know regarding how we work",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "Jul 3, 2020",
    duration: 4,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
  {
    id: 5,
    url: "/img6.jpg",
    title: "Connecting artificial intelligence with digital product design",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "May 22, 2020",
    duration: 3,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
  {
    id: 6,
    url: "/img7.jpg",
    title: "It’s all about finding the perfect balance",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "Oct 3, 2020",
    duration: 5,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
  {
    id: 7,
    url: "/img8.jpg",
    title: "I believe learning is the most important skill",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "Nov 26, 2020",
    duration: 4,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
  {
    id: 8,
    url: "/img9.jpg",
    title: "Clients are part of the team",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "Dec 18, 2020",
    duration: 3,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
  {
    id: 9,
    url: "/img10.jpg",
    title: "Clients are part of the team",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "Jan 6, 2020",
    duration: 5,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
  {
    id: 10,
    url: "/img11.jpg",
    title: "Here are some things you should know regarding how we work",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "Feb 5, 2020",
    duration: 4,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
  {
    id: 11,
    url: "/img12.jpg",
    title: "Connecting artificial intelligence with digital product design",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "Mar 15, 2020",
    duration: 5,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
  {
    id: 12,
    url: "/img13.jpg",
    title:
      "How modern remote working tools get along with Old School Cowboy's methods",
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "Jun 26, 2020",
    duration: 4,
    author: "Mika Matikainen",
    author_bild: "https://source.unsplash.com/random/100x100",
  },
];

app.set('view engine', 'ejs')
app.use(express.static('public'))

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.listen(PORT, () => {
  console.log('server listening at https://localhost3000')
})
app.get('/', (req, res) => {

  res.render('index', { data: data })
})
app.get('/all', (req, res) => {
  res.render('all')
})
app.get('/newArticle', (req, res) => {
  res.render('newArticle', { data: data })
})
app.post('/new', urlencodedParser, (req, res) => {
  console.log(req.body);
  let newArticle = {
    id: Date.now(),
    url: req.body.urlPicture,
    title:
      req.body.title,
    body:
      "This lovely web is full of everything which is created I don't know what in mind, considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.",
    published_at: "Okt 21, 2021",
    duration: req.body.duration,
    author: req.body.author,
    author_bild: req.body.authorPicture,
  }
  data.push(newArticle)
  res.redirect('/newArticle')
})
app.get('/post', (req, res) => {
  res.render('blogs', { data: data })
})
app.get('/post/:item', (req, res) => {
  console.log(req.params.item);

  res.render("blogItem", { data: data, blogItem: data[req.params.item], title: data[req.params.item].title })
})
app.use((req, res) => {
  res.render('404')
})