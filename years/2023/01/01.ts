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
  const lines = input.split('\n')
  let sum = 0
  const fre =
    /(\d)|(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)|(zero)/
  const bre =
    /(\d)|(eno)|(owt)|(eerht)|(ruof)|(evif)|(xis)|(neves)|(thgie)|(enin)|(orez)/
  const english: { [key: string]: number } = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
  }
  for (const line of lines) {
    const first = fre.exec(line)?.[0]
    const lastReversed = bre.exec([...line].reverse().join(''))?.[0]
    if (first && lastReversed) {
      const last = [...lastReversed].reverse().join('')
      const firstVal = first.length > 1 ? english[first] : Number(first)
      const lastVal = last.length > 1 ? english[last] : Number(last)
      sum += Number(String(firstVal) + String(lastVal))
    }
  }
  return sum
}
