import { p2023day2_part1, p2023day2_part2 } from './02'
import * as fs from 'fs/promises'
import * as path from 'path'

test('p2023day2_part1 1', () => {
  expect(
    p2023day2_part1(
      `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`,
    ),
  ).toBe(8)
})

test('p2023day2_part1 2', async () => {
  const rawInput = await fs.readFile(path.join(__dirname, 'input.txt'), 'utf8')
  expect(p2023day2_part1(rawInput)).toBe(2727)
})

test('p2023day2_part2 1', () => {
  expect(
    p2023day2_part2(
      `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`,
    ),
  ).toBe(2286)
})

test('p2023day2_part2 2', async () => {
  const rawInput = await fs.readFile(path.join(__dirname, 'input.txt'), 'utf8')
  expect(p2023day2_part2(rawInput)).toBe(56580)
})
