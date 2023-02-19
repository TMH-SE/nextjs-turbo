/** @type {import('tailwindcss').Config} */
const sharedConfig = require('tailwind-config/tailwind.config')

module.exports = {
  ...sharedConfig,
  prefix: 'ui-',
}
