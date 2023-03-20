import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function template(strings: TemplateStringsArray, ...expressions: any[]) {
  let finalString = ''

  // Loop through all expressions
  expressions.forEach((value, i) => {
    finalString += `${strings[i]}${value}`
  })

  // Add the last string literal
  finalString += strings[strings.length - 1]

  return finalString
}

function merge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const tw = {
  template,
  merge,
}

export default tw
