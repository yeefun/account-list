var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  const { username } = req.query
  const db = req.connection

  const filter = username ? 'WHERE username=?' : ''

  db.query(`SELECT * FROM accounts ${filter}`, username, function (err, rows) {
    if (err) { throw err }
    const data = rows

    res.render('index', { title: 'Account List', data, username });
  })
})

router.get('/add', function (req, res) {
  res.render('userAdd', { title: 'Add a User' })
})
router.post('/userAdd', function (req, res) {
  const { username, password, email } = req.body
  const data = {
    username,
    password,
    email
  }
  const db = req.connection

  db.query('INSERT INTO accounts SET ?', data, function (err) {
    if (err) { throw err }

    res.redirect('/')
  })
})

router.get('/userEdit', function (req, res) {
  const { id } = req.query
  const db = req.connection

  db.query('SELECT * FROM accounts where id=?', id, function (err, rows) {
    if (err) { throw err }

    const data = rows
    res.render('userEdit', { title: 'Edit an Account', data })
  })
})
router.post('/userEdit', function (req, res) {
  const { id, password, email } = req.body
  const data = {
    password,
    email
  }
  const db = req.connection

  db.query('UPDATE accounts SET ? WHERE id=?', [data, id], function (err) {
    if (err) { throw err }

    res.redirect('/')
  })
})

router.get('/userDelete', function (req, res) {
  const { id } = req.query
  const db = req.connection

  db.query('DELETE FROM accounts WHERE id=?', id, function (err) {
    if (err) { throw err }

    res.redirect('/')
  })
})

module.exports = router;
