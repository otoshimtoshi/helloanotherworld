export type MathEx = {
  degrees: (radian: number) => number
  radians: (degree: number) => number
  clamp: (value: number, min: number, max: number) => number
  mix: (x1: number, x2: number, buffer: number) => number
  step: (e: number, x: number) => 1 | 0
  smoothstep: (x1: number, x2: number, buffer: number) => number | undefined
  spherical: (radian1: number, radian2: number, radius: number) => Array<number>
  randomArbitrary: (min: number, max: number) => number
  randomInt: (min: number, max: number) => number
}
export const $MathEx: MathEx = {
  degrees: (radian: number) => {
    return (radian / Math.PI) * 180
  },
  radians: (degree: number) => {
    return (degree * Math.PI) / 180
  },
  clamp: (value: number, min: number, max: number) => {
    return Math.min(Math.max(value, min), max)
  },
  mix: (x1: number, x2: number, buffer: number) => {
    return x1 * (1 - buffer) + x2 * buffer
  },
  step: (e: number, x: number) => {
    return x >= e ? 1 : 0
  },
  smoothstep: (x1: number, x2: number, buffer: number) => {
    if (x1 >= x2) return undefined
    const t = Math.min(Math.max((buffer - x1) / (x2 - x1), 0), 1)
    return t * t * (3 - 2 * t)
  },
  spherical: (radian1: number, radian2: number, radius: number) => {
    return [
      Math.cos(radian1) * Math.cos(radian2) * radius,
      Math.sin(radian1) * radius,
      Math.cos(radian1) * Math.sin(radian2) * radius
    ]
  },
  randomArbitrary: (min: number, max: number) => {
    return Math.random() * (max - min) + min
  },
  randomInt: (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
