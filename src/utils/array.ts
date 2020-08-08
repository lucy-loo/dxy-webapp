function WrapArray<T extends unknown>(arr: Array<T>): ({ id: string } & T)[] {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const val = new Proxy(arr, {
    get: (target, prop) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const res = target[prop]
      if (!Number.isNaN(Number(prop))) {
        return { id: prop, ...res }
      }
      return typeof res == 'function' ? Function.bind.call(res, val) : res
    },
  })
  return val
}

export default WrapArray
