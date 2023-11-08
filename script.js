const randomDisplay = document.querySelector('.random__number')

const minNumber = document.querySelector('.min')
const maxNumber = document.querySelector('.max')

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  minMath = Math.ceil(minNumber.value)
  maxMath = Math.floor(maxNumber.value)
  console.log(`Min: ${minMath}, Max: ${maxMath} `)
  randomDisplay.innerHTML =
    Math.floor(Math.random() * (maxMath + 1 - minMath)) + minMath
})
