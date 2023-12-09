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

export const p2023day2_part2 = (input: string): number => {
  const processLine = (line: string): number => {
    const colors = {
      red: 0,
      green: 0,
      blue: 0,
    }
    const valuesRaw = line.split(':')[1]
    if (!valuesRaw) return 0
    for (const valueRaw of valuesRaw.split(';')) {
      for (const cube of valueRaw.split(',')) {
        const [_, count, color] = cube.split(' ')
        if (count > colors[color]) colors[color] = Number.parseInt(count)
      }
    }
    return colors.red * colors.blue * colors.green
  }
  let result = 0
  const lines = input.split('\n')
  for (const line of lines) {
    result += processLine(line)
  }
  return result
}
