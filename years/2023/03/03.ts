function numberRange(start, end) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return new Array(end - start).fill().map((_d, i) => i + start)
}

export const p2023day3_part1 = (input: string): number => {
  const lineLength = input.indexOf('\n') + 1
  const symbolRegexp = /[^0-9.\n]/g
  const symbolPositions = [...input.matchAll(symbolRegexp)].map(
    (match) => match.index,
  )
  const numberRegexp = /[0-9]+/g
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const numbers: number[] = [...input.matchAll(numberRegexp)].map((match) => [
    match[0],
    match.index,
    match[0].length,
  ])
  const sum = numbers.reduce((total, number) => {
    const isEdgeLeft = number[1] % lineLength === 0
    const isEdgeRight = (number[1] + number[2] + 1) % lineLength === 0
    let positionsToCheck = [
      ...numberRange(
        number[1] - (!isEdgeLeft && 1) - lineLength,
        number[1] + number[2] - lineLength + (!isEdgeRight && 1),
      ),
      !isEdgeLeft && number[1] - 1,
      !isEdgeRight && number[1] + number[2],
      ...numberRange(
        number[1] - (!isEdgeLeft && 1) + lineLength,
        number[1] + number[2] + lineLength + (!isEdgeRight && 1),
      ),
    ]
    positionsToCheck = positionsToCheck.filter(
      (position) => position >= 0 && position < input.length,
    )
    const isPartNumber = positionsToCheck.some((position) =>
      symbolPositions.includes(position),
    )
    return isPartNumber ? total + parseInt(number[0]) : total
  }, 0)
  return sum
}

export const p2023day3_part2 = (input: string): number => {
  const lineLength = input.indexOf('\n') + 1
  const symbolRegexp = /[*]/g
  const symbolPositions = [...input.matchAll(symbolRegexp)].map(
    (match) => match.index,
  )
  const numberRegexp = /[0-9]+/g
  const numbers = [...input.matchAll(numberRegexp)].map((match) => [
    match[0],
    match.index,
    match[0].length,
  ])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const potentialGears: any = Array.from(
    { length: symbolPositions.length },
    () => [],
  )
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  numbers.forEach((number: any) => {
    const isEdgeLeft = number[1] % lineLength === 0
    const isEdgeRight = (number[1] + number[2] + 1) % lineLength === 0
    let positionsToCheck = [
      ...numberRange(
        number[1] - (!isEdgeLeft && 1) - lineLength,
        number[1] + number[2] - lineLength + (!isEdgeRight && 1),
      ),
      !isEdgeLeft && number[1] - 1,
      !isEdgeRight && number[1] + number[2],
      ...numberRange(
        number[1] - (!isEdgeLeft && 1) + lineLength,
        number[1] + number[2] + lineLength + (!isEdgeRight && 1),
      ),
    ]
    positionsToCheck = positionsToCheck.filter(
      (position) => position >= 0 && position < input.length,
    )
    positionsToCheck.forEach((position) => {
      const symbolIndex = symbolPositions.findIndex((p) => p == position)
      symbolIndex >= 0 && potentialGears[symbolIndex].push(number[0])
    })
  })
  return potentialGears.reduce((total, gear) => {
    const isGear = gear.length === 2
    return isGear ? total + parseInt(gear[0]) * parseInt(gear[1]) : total
  }, 0)
}
