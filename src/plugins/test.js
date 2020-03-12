const longFunc = (i) => {
  return new Promise((resolve, reject) => {
    const t = Math.random() * 1000 + 1000
    console.log('t:' + t + 'ms')
    setTimeout(() => {
      resolve(i)
    }, t)
  })
}

const foo = async() => {
  for (let i = 0; i < 10; ++i) {
    const r = await longFunc(i)
    console.log(r)
  }
  return 'abcd'
}

export default {
  foo
}
