const express = require('express');
const ejs = require('ejs')
const path = require('path');
const { v4: uuidv4 } = require('uuid')
const app = express();

const comments = [
  {
    id: uuidv4(),
    username: "Todd",
    comment: "lolol that is sooo funny!",
    avatar: "/images/user1.png"
  },
  {
    id: uuidv4(),
    username: "Becky",
    comment: "I love this, omg!!",
    avatar: "/images/user2.png"
  },
  {
    id: uuidv4(),
    username: "sk8erboi",
    comment: "delete ur account, n00b!!!!!!",
    avatar: "/images/user3.png"
  },
  {
    id: uuidv4(),
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
    "id": uuidv4(),
    username,
    comment,
    "avatar": null
  }
  console.log(newComment.id)
  comments.push(newComment)
  res.redirect('/comments')
})

app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments.find(c => c.id === id)
  res.render('comments/show', { comment });
})

app.patch('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments.find(c => c.id === id);
  const newComment = req.body.comment;
  comment.comment = newComment;
  res.redirect("/comments")
})