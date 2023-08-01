const express = require('express');
const path = require('path');
const app = express();

const comments = [
  {
    username: "Todd",
    comment: "lolol that is sooo funny!"
  },
  {
    username: "Becky",
    comment: "I love this, omg!!"
  },
  {
    username: "sk8erboi",
    comment: "delete ur account LMFAOOOO. this is pathetic"
  },
  {
    username: "onlysayswoof",
    comment: "woof woof woof"
  }
]

app.get('/comments', (req, res) => {
  res.render('comments/index', { comments })
})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.listen(3000, () => {
  console.log("listening!")
})

app.use(express.urlencoded({extended: true}));
app.use(express.json())



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