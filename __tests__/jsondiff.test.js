import { fileURLToPath } from 'url'
import path from 'path'
import gendiff from '../src/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)

const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`

test('gendiff', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')
  const diff = gendiff(file1, file2)
  expect(diff).toEqual(expected)
})
