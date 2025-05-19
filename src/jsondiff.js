export default (data1, data2) => {
  const keys = [...new Set([...Object.keys(data1), ...Object.keys(data2)])].sort()
  const differences = []

  keys.forEach((key) => {
    if (!(key in data2)) {
      differences.push(`  - ${key}: ${data1[key]}`)
    }
    else if (!(key in data1)) {
      differences.push(`  + ${key}: ${data2[key]}`)
    }
    else if (data1[key] !== data2[key]) {
      differences.push(`  - ${key}: ${data1[key]}`)
      differences.push(`  + ${key}: ${data2[key]}`)
    }
    else {
      differences.push(`    ${key}: ${data1[key]}`)
    }
  })

  return `{\n${differences.join('\n')}\n}`
}
