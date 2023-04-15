const MAX_COUNT = 3
let timer: NodeJS.Timer
let callbackFn: () => void
let count = 0

function toast(callback: () => void) {
  callbackFn = callback
  run()
  return {
    drop,
  }
}

function format(minutes: number) {
  const minute = 60 * 1000
  const milliseconds = minutes * minute
  return milliseconds
}

function drop() {
  clearTimeout(timer)
}

function run() {
  const millisecond = format(0.01)

  timer = setTimeout(() => {
    if (count < MAX_COUNT) {
      count++
      callbackFn()
      run()
    } else {
      drop()
    }
  }, millisecond)
}

export default toast
