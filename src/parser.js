import yaml from 'js-yaml'

export default (filepath, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(filepath)
    case 'yaml':
    case 'yml':
      return yaml.load(filepath)
    default:
      throw new Error(`Unsupported file format: ${format}`)
  }
}
