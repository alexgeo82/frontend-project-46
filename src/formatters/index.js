import stylish from './stylish.js'
import plain from './plain.js'

export default (data, outputFormat = 'stylish') => {
  switch (outputFormat) {
    case 'plain':
      return plain(data)
    default:
      return stylish(data)
  }
}
