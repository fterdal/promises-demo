const { waitForSuccess, waitForFailure } = require('./waits')

const hello = async (string) => {
  await waitForFailure(1000)
  return string
}

async function waitForIt() {
  try {
    const string = await hello('hello')
    console.log('IT WORKED!', string)
  } catch (err) {
    console.log('OH NO!', err)
  }
}
waitForIt()
// console.log('hello returns',
//   hello('hello')
//   .then(str => console.log(str))
// )
