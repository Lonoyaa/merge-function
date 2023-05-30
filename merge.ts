function merge(collection_1: Array<number>, collection_2: Array<number>): Array<number> {
  const merged: Array<number> = []

  let i = 0
  let j = 0

  while (i < collection_1.length && j < collection_2.length) {
    if (collection_1[i] < collection_2[j]) {
      merged.push(collection_1[i])
      i++
    } else {
      merged.push(collection_2[j])
      j++
    }
  }

  // Add remaining elements 
  while (i < collection_1.length) {
    merged.push(collection_1[i])
    i++
  }
  while (j < collection_2.length) {
    merged.push(collection_2[j])
    j++
  }

  return merged
}

export default merge
