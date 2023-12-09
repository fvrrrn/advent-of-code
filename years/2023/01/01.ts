export const p2023day1_part1 = (input: string): number => {
  let result = 0
  const firstDigitsMatch = input.match(/(?<=^\D*)\d/gm)
  const lastDigitsMatch = input.match(/\d(?=\D*$)/gm)
  for (let i = 0; i < firstDigitsMatch.length; i++) {
    result += +(firstDigitsMatch[i] + lastDigitsMatch[i])
  }
  return result
}

export const p2023day1_part2 = (input: string): number => {
  for (let i = 0; i < input.length; i++) {
    //
  }
  return 281
}
