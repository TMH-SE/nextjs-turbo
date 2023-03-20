const sharedTailwindConfig = require('tailwind-config/tailwind.config')

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedTailwindConfig,
  prefix: 'ui-',
}
