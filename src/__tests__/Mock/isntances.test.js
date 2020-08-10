describe('mockFn.mock.instance', () => {
  // The object returned by the first instantiation of this function
  test('mockFn.mock.instance === 0', () => {
    const mockFn = jest.fn()
    expect(mockFn.mock.instances.length).toBe(0)
  })

  describe('mockFn.mock.instance', () => {
    const mockFn = jest.fn()
    mockFn()
    test('mockFn.mock.instance === 1', () => {
      expect(mockFn.mock.instances.length).toBe(1)
    })
  })
  describe('mockFn.mock.instance', () => {
    const mockFn = jest.fn()
    mockFn(1)
    new mockFn()
    test('mockFn.mock.instance === 2', () => {
      expect(mockFn.mock.instances.length).toBe(2)
    })
  })
})
