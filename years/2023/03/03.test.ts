import { p2023day3_part1, p2023day3_part2 } from './03'
import * as fs from 'fs/promises'
import * as path from 'path'

test('p2023day2_part1 2', async () => {
  const rawInput = await fs.readFile(path.join(__dirname, 'input.txt'), 'utf8')
  expect(p2023day3_part1(rawInput)).toBe(539637)
})

test('p2023day3_part1', async () => {
  const rawInput = await fs.readFile(path.join(__dirname, 'input.txt'), 'utf8')
  expect(p2023day3_part2(rawInput)).toBe(82818007)
})
