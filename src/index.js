import parser from './parser.js'
import { getFormat, getData } from './getdata.js'
import diff from './jsondiff.js'

export default (filepath1, filepath2) => {
  const data1 = parser(getData(filepath1), getFormat(filepath1))
  const data2 = parser(getData(filepath2), getFormat(filepath2))
  const differences = diff(data1, data2)
  return differences
}
