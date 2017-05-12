import test from 'ava'

test('should create a tagged template literal', t => {
  // Allow functions to be interpolated, and they will be evaluated when the string is built
  const str =
    '(id,created,employee(id,firstname,employeeType(id),lastname),location)'

  let level = 0
  let newString = ''
  for (let i = 1; i < str.length - 1; i++) {
    let val = str[i]
    if (val === '(') level++
    if (val === ')') {
      val = ''
      level--
    }
    if (/,|\(/.test(val)) {
      const amtTrailingSpace = level === 0 ? '' : ' '
      val = `\n${'-'.repeat(level)}${amtTrailingSpace}`
    }

    // console.log(val)
    newString += val
  }

  const alphabetizeLines = string => string
    .split(/\n(?!-)/)
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
  console.log(alphabetizeLines(newString))
})
