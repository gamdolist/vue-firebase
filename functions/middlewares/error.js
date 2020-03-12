
module.exports = (err, req, res, next) => {
  console.log(JSON.stringify(req.headers))
  console.log('middleware')
  res.send(err.message)
}
