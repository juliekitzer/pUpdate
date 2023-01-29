const express = require('express');
const app = express();
const portNumber = 3005;
const Sequelize = require('sequelize');
const cors = require('cors');
const bcrypt = require('bcrypt');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const { User, JoinTable, Dog, Activity } = require('./models')
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true
    })
)


// const db = {}
// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: 'postgres',
  
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     },

//     operatorsAliases: false
// });
// db.sequelize = sequelize
// db.Sequelize = Sequelize





app.listen(portNumber, function (req, res) {
    console.log(`Listening on port ${portNumber}`);
})

app.get("/", async function (req, res) {
    res.render('Home')
})

app.get("/Login", async function (req, res) {
    res.render('Login')
})

app.get("/Register", async function (req, res) {
    res.render('Register')
})

app.get("*", async function (req, res) {
    res.render("Lost");
})

app.post("/Register", async function (req, res) {
    //Deconstruct Inputs
    const { firstname, lastname, email, username, password, birthday } = req.body;
    //Hash the password
    //Create the entry in the database
    let theHashedPassword = await bcrypt.hash(password, 10)
    let createdUser = await User.create({
        firstname: firstname,
        lastname: lastname,
        email: email,
        username: username,
        password: theHashedPassword,
        birthday: birthday,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    res.send("success");
    //    console.log("this is a request body", req.body);
    //    console.log("this is the whole request", req)
})

app.post('/verification', async function (req, res) {
    console.log('Weve arrived at verification');
    const { username, password } = req.body;
    let theUserInformation = await User.findOne({
        where: { username: username }
    })
    if (theUserInformation != null) {
        let theResult = await bcrypt.compare(password, theUserInformation.password)
        console.log("This is the result:", theResult);
        if (theResult) {
            res.status(201).json(theUserInformation)
            //.send('Login sucessful!');
        } else {
            res.status(404);
        }
    }
    else {
        res.status(404);
    }
})

app.post('/api/join/:userid/:dogid', async function (req, res) {
    let { userid, dogid } = req.params;
    let results = await JoinTable.create({
        dogid: dogid,
        userid: userid,
        createdAt: new Date(),
        updatedAt: new Date()
    })

    console.log(results);
    res.json({ results });
})

app.get('/api/Activity', async function (req, res) {
    let results = await Activity.findAll();
    res.json({ results });
})

app.get('/api/Activity/:id', async function (req, res) {
    let { id } = req.params;
    let results = await Activity.findByPk(id);
    req.json({ results });
})

app.post('/api/Activity/create', async function (req, res) {
    const { dogid, userid, activity, date, time, description } = req.body;
    let results = await Activity.create({
        dogid: dogid,
        userid: userid,
        activity: activity,
        date: date,
        time: time,
        description: description,
    })
    res.json({ results });
})


app.get('/api/User', async function (req, res) {
    let results = await Activity.findAll();
    res.json({ results });
})

app.get('/api/User/:id', async function (req, res) {
    let { id } = req.params;
    let results = await User.findByFk(id);
    req.json({ results });
})

app.post('/api/User/create', async function (req, res) {
    const { firstname, lastname, email, username, password, birthday } = req.body;
    let results = await User.create({
        firstname: firstname,
        lastname: lastname,
        email: email,
        username: username,
        password: password,
        birthday: birthday
    })
    console.log(results);
    res.json({ results });
})


app.get('/api/Dog', async function (req, res) {
    let results = await Dog.findAll();
    console.log(results);
    res.json({ results });
})

// app.get('/api/Dog/:id', async function (req, res) {
//     let { id } = req.params;
//     let results = await Dog.findByPk(id);
//     res.json({ results });
// })

app.post('/api/Dog/create', async function (req, res) {
    const { dogname, weight, breed, birthday, gotchaday, chipid, rabiestag, gender, spayedorneutered, food, allergies, sensitivities, medication, additional_info } = req.body;
    let results = await Dog.create({
        dogname: dogname,
        weight: weight,
        breed: breed,
        birthday: birthday,
        gotchaday: gotchaday,
        chipid: chipid,
        rabiestag: rabiestag,
        gender: gender,
        spayedorneutered: spayedorneutered,
        food: food,
        allergies: allergies,
        sensitivities: sensitivities,
        medication: medication,
        additional_info: additional_info
    })
    res.json({ results });
})

app.post('/api/JoinTable/create', async function (req, res) {
    const { userid, dogid } = req.body;
    let results = await JoinTable.create({
        dogid: dogid,
        userid: userid
    })
    res.json({ results });
})

app.get('/api/Dog/:userid', async function (req, res) {
    let { userid } = req.params;
    let results = await Dog.findAll({
        include: [
            {
              model: JoinTable,
              where: { dogid },
              required: true
            },
            {
              model: User,
              where: { userid: userid },
              required: true
            }
          ]
    })
})









