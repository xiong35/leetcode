function getRow(rowIndex: number): number[] {
  let theRow = [1];
  for (let i = 1; i < rowIndex; i++) {
    theRow.unshift(1);
    for (let j = 1; j < theRow.length - 1; j++) {
      theRow[j] = theRow[j] + theRow[j + 1];
    }
  }

  return theRow;
}
