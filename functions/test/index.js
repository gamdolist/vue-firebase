
// const express = require('express')
// const app = express()

const app = require('express')()
// CORS Error
const cors = require('cors')

// 에러 발생시에 async 사용
// functions backend : yarn add express-async-errors
require('express-async-errors')

// middleware
app.use(cors())

// post, get, put, delete 에서 에러가 발생하면 실행된다
// express 실행중 에러가 발생하면 이 루틴으로 들어온다.
app.use((req, res, next) => {
  // res.send("express error:" + err.message)
  // if (err.message === 'access denied') {
  //   res.status(403)
  //   res.json({ error: err.message })
  // }
  // next(err)
  throw Error('eeeeeeeerror')
  next()
})

app.use(require('../middlewares/verifyToken'))

// async 를 해주어야 app.use((err,req,res,nexe)) 가 실행된다.
app.post('/', async(req, res) => {
  // const a = 3
  // res.send('post-- ok' + a.b.c)

  // printed by terminal
  // console.log(JSON.stringify(req.headers))
  res.send('post OK')
})

app.get('/:id', (req, res) => {
  res.send('get ok' + req.params.id)
})

app.put('/:id', (req, res) => {
  res.send('put ok' + req.params.id)
})

app.delete('/:id', (req, res) => {
  res.send('delete ok' + req.params.id)
})

app.use(require('../middlewares/error'))

module.exports = app
