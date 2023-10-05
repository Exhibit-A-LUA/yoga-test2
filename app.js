const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Student = require('./models/student');
const StuClass = require('./models/stuclass');


// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://exhibit_a:1Nish2Andy3@cluster0.glwfnpi.mongodb.net/YogaDB?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useUnifiedTopology: true})
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));


// register view engine
app.set('view engine', 'ejs');

// middleware and static files
// setting up access to public folder
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
// app.use(morgan('dev'));


// routes

app.get('/', (req, res) => {
  res.render('home', {title: 'KNUTA Home Page'})
});

app.get('/about', (req, res) => {
  res.render('about', {title: 'KNUTA About Page'})
});

// student Routes

app.get('/students', (req, res) => {
  Student.find().sort({name: 1})
  .then((result) => {
    res.render('students', { title: 'All Students', students: result})
  })
  .catch((err) => {
    console.log(err);
  })
});

app.get('/stuclasses', (req, res) => {
  StuClass.find()
  .then((result) => {
    res.render('stu-classes', { title: 'All Classes', stuclasses: result})
  })
  .catch((err) => {
    console.log(err);
  })
});


app.post('/students', (req, res) => {
  const student = new Student(req.body);

  student.save()
  .then((result) => {
    res.redirect('/students')
  })
  .catch((err) => {
    console.log(err);
  })
})

app.get('/students/:id', (req, res) => {
  const id = req.params.id;
  Student.findById(id)
    .then((result) => {
      res.render('stu-details', {student: result, title: 'Student Details'});
    })
    .catch((err) => {
      console.log(err);
    })
});

app.delete('/students/:id', (req, res) => {
  const id = req.params.id;
  Student.findByIdAndDelete(id)
  .then((result) => {
    res.json({redirect: '/students'})
  })
  .catch((err) => {
    console.log(err);
  })
})

app.get('/student-create', (req, res) => {
  res.render('create', {title: 'KNUTA Add Student Page'})
});


// 404 page - express goes down the above list, and if it matches
// one, it does not run any more in the list
// if it gets to here, then no match so 404 - file not found
// so ... MUST BE AT THE BOTTOM OF THE LIST
app.use((req, res) => {
  res.status(404).render('404',  {title: 'KNUTA 404'})
})