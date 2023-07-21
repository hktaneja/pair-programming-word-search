const wordSearch = (letters, word) => {
  if (letters.length === 0 || word.length === 0) { //check that inputs are not empty
    return false;
  }

  // Horizontal search
  const horizontalJoin = letters.map(ls => ls.join('')); //concatenates array
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  // Transpose the matrix (Vertical search)
  const rows = letters.length;
  const columns = letters[0].length;
  const verticalJoin = []; // I create a empty array here already

  //logic to transpose the array and concatenates all elements of the column into a single string
  for (let i = 0; i < columns; i++) {
    let columnString = '';
    for (let j = 0; j < rows; j++) {
      columnString += letters[j][i];
    }
    verticalJoin.push(columnString);
  }
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;

