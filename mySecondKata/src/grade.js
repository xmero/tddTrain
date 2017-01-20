
function grade (a, b, c) {
  var m = (a + b + c) / 3
  if (m >= 90 && m <= 100) {
    return 'A'
  } else if (m >= 80 && m < 90) {
    return 'B'
  } else if (m >= 70 && m < 80) {
    return 'C'
  } else if (m >= 60 && m < 70) {
    return 'D'
  } else if (m >= 0 && m < 60) {
    return 'F'
  }
}
