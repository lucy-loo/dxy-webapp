function WrapArray<T extends unknown>(arr: Array<T>): ({ id: string } & T)[] {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return new Proxy(arr, {
    get: (target, prop) => {
      if (!Number.isNaN(Number(prop))) {
        return { id: prop, ...target }
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return target[prop]
    },
  })
}

export default WrapArray
