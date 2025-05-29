import { fileURLToPath } from 'url'
import path from 'path'
import gendiff from '../src/index.js'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFixtureFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8').trim()

const cases = [
  ['json', 'stylish'],
  ['yml', 'stylish'],
  ['json', 'plain'],
  ['yml', 'plain'],
]

describe.each(cases)('gendiff', (extention, format) => {
  test(`${format} object`, () => {
    const firstFile = getFixturePath(`file1.${extention}`)
    const secondFile = getFixturePath(`file2.${extention}`)
    const expected = readFixtureFile(`${format}.txt`)
    const actual = gendiff(firstFile, secondFile, format)
    expect(actual).toEqual(expected)
  })
})
