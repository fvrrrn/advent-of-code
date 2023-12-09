export const p2023day2_part1 = (input: string): number => {
  const colors = {
    red: 12,
    green: 13,
    blue: 14,
  }
  const processLine = (line: string): number => {
    const [game, valuesRaw] = line.split(':')
    if (!valuesRaw) return 0
    for (const valueRaw of valuesRaw.split(';')) {
      for (const cube of valueRaw.split(',')) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [_, count, color] = cube.split(' ')
        if (count > colors[color]) return 0
      }
    }
    return Number.parseInt(game.split(' ')[1])
  }
  let result = 0
  const lines = input.split('\n')
  for (const line of lines) {
    result += processLine(line)
  }
  return result
}
