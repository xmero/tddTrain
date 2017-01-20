describe('a function drink that', function () {
  it('should exist', function () {
    expect(drink).toBeDefined()
  })
  it('should return a string', function () {
    var result = drink(5)
    expect(typeof result).toEqual('string')
  })
  it('should return drink toddy when age is <14', function () {
    var result = drink(13)
    expect(result).toEqual('drink toddy')
  })
  it('should return drink coke when  14>= age <18', function () {
    var result = drink(16)
    expect(result).toEqual('drink coke')
  })
  it('should return drink beer when  18>= age <21', function () {
    var result = drink(20)
    expect(result).toEqual('drink beer')
  })
  it('should return drink whisky when  age >= 21', function () {
    var result = drink(25)
    expect(result).toEqual('drink whisky')
  })
})
