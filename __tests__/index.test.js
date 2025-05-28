import { fileURLToPath } from 'url'
import path from 'path'
import gendiff from '../src/index.js'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFixtureFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8').trim()

test(`stylish`, () => {
  const firstFile = getFixturePath(`file1.json`)
  const secondFile = getFixturePath(`file2.json`)
  const expected = readFixtureFile(`stylish.txt`)
  const actual = gendiff(firstFile, secondFile, `stylish`)
  expect(actual).toEqual(expected)
})
