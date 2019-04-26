const waitForSuccess = ms => new Promise(resolve => setTimeout(resolve, ms))

const waitForFailure = ms => new Promise((_, reject) => setTimeout(reject, ms))

module.exports = {
  waitForSuccess,
  waitForFailure,
}
