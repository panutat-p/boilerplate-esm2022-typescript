async function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms))
}

console.log('start')
await sleep(2000)
console.log('done')

export {}
