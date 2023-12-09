import { p2023day1_part1, p2023day1_part2 } from './01'
import * as fs from 'fs/promises'
import * as path from 'path'

test('Counts sum of sum of first and last digit in line 1', () => {
  expect(
    p2023day1_part1(
      `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`,
    ),
  ).toBe(142)
})

test('Counts sum of sum of first and last digit in line 2', async () => {
  const rawInput = await fs.readFile(path.join(__dirname, 'input.txt'), 'utf8')
  expect(p2023day1_part1(rawInput)).toBe(54697)
})

test('Counts sum of sum of first and last digit or word in line 1', () => {
  expect(
    p2023day1_part2(
      `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`,
    ),
  ).toBe(281)
})

test('Counts sum of sum of first and last digit or word in line 2', async () => {
  const rawInput = await fs.readFile(path.join(__dirname, 'input.txt'), 'utf8')
  expect(p2023day1_part2(rawInput)).toBe(54885)
})
