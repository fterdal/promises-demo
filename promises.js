const { waitForSuccess, waitForFailure } = require('./waits')

const hello = async (string) => {
  await waitForSuccess(1000)
  return string
}

const arr = ['finn', 'collin', 'priti']

async function sayHelloToInstructorsParallel() {
  const instructors = await Promise.all(
    arr.map(instructor => hello(instructor))
  )
  console.log('instructors', instructors)
  console.log('Theyre all done!')
}
sayHelloToInstructorsParallel()
async function sayHelloToInstructors() {
  for (let i = 0; i < arr.length; i++) {
    const name = await hello(arr[i])
    console.log(name)
  }
}
// sayHelloToInstructors()

// async function waitForIt() {
//   try {
//     const string = await hello('hello')
//     console.log('IT WORKED!', string)
//   } catch (err) {
//     console.log('OH NO!', err)
//   }
// }
// waitForIt()
// console.log('hello returns',
//   hello('hello')
//   .then(str => console.log(str))
// )
