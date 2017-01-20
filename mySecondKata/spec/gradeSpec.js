describe('a function grade that', function () {
  it('should exist', function () {
    expect(grade).toBeDefined()
  })
  it('should return a string', function () {
    var result = grade(95, 95, 95)
    expect(typeof result).toEqual('string')
  })
  it('should return A when 90 <= score <= 100 ', function () {
    var result = grade(95, 95, 95)
    expect(result).toEqual('A')
  })
  it('should return B when 80 <= score < 90 ', function () {
    var result = grade(85, 85, 85)
    expect(result).toEqual('B')
  })
  it('should return C when 70 <= score < 80 ', function () {
    var result = grade(75, 75, 75)
    expect(result).toEqual('C')
  })
  it('should return D when 60 <= score < 70 ', function () {
    var result = grade(65, 65, 65)
    expect(result).toEqual('D')
  })
  it('should return F when 0 <= score < 60 ', function () {
    var result = grade(5, 5, 5)
    expect(result).toEqual('F')
  })
})
