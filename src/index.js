import parser from './parser.js'
import { getFormat, getData } from './getdata.js'
import buildAstTree from './buildAstTree.js'
import formatter from './formatters/index.js'

export default (filepath1, filepath2, format = 'stylish') => {
  const data1 = parser(getData(filepath1), getFormat(filepath1))
  const data2 = parser(getData(filepath2), getFormat(filepath2))
  const result = buildAstTree(data1, data2)
  const differences = formatter(result, format)
  return differences
}
