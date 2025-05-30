import stylish from './stylish.js'
import plain from './plain.js'
import json from './json.js'

export default (data, outputFormat = 'stylish') => {
  switch (outputFormat) {
    case 'plain':
      return plain(data)
    case 'json':
      return json(data)
    default:
      return stylish(data)
  }
}
