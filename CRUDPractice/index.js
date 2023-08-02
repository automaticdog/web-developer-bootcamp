const express = require('express');
const ejs = require('ejs')
const path = require('path');
const app = express();

const comments = [
  {
    id: 1,
    username: "Todd",
    comment: "lolol that is sooo funny!",
    avatar: "/images/user1.png"
  },
  {
    id: 2,
    username: "Becky",
    comment: "I love this, omg!!",
    avatar: "/images/user2.png"
  },
  {
    id: 3,
    username: "sk8erboi",
    comment: "delete ur account, n00b!!!!!!",
    avatar: "/images/user3.png"
  },
  {
    id: 4,
    username: "onlysayswoof",
    comment: "woof woof woof",
    avatar: "/images/user4.png"
  }
]

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(__dirname + '/public'))

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get('/comments', (req, res) => {
  res.render('comments/index', { comments })
})

app.listen(3000, () => {
  console.log("listening!")
})

app.get('/comments/new', (req, res) => {
  res.render('comments/new');
})

app.post('/comments/new', (req, res) => {
  const { username, comment } = req.body;
  const newComment = { 
    "id": comments.length + 1,
    username,
    comment 
  }
  comments.push(newComment)
  res.redirect('/comments')
})

app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments.find(c => c.id === parseInt(id))
  res.render('comments/show', { comment });
})



// app.get('/tacos', (req, res) => {
//   res.send('GET request sent!');
// })

// app.post('/tacos', (req, res) => {
//   const { meat, qty } = req.body;
//   res.send(`You ordered: ${qty} ${meat} tacos`);
//   console.log(req.body)
// })

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/getpost.html'))
// })