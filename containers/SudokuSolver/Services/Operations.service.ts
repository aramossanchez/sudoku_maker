//ESCRIBIR UN NÚMERO ALEATORIO QUE NO EXISTA YA EN LA ZONA (FILA, COLUMNA O CUADRÍCULA DE 9)
const writeNumberAutomatically = (zone: number[]) => {
  let value = 0;
  while (zone.includes(value) || value === 0) {
    value = Math.floor(Math.random() * (9 - 1 + 1) + 1);
  }
  return value;
}

//COMPROBAR QUE LA FILA TIENE TODOS SUS NÚMEROS DISTINTOS, Y QUE ESOS NÚMEROS ESTÁN ENTRE EL 1 Y EL 9.
export const checkRow = (sudoku: number[][], type: string): boolean => {

  let correctRow = true;

  for (const row of sudoku) {
    const lengthOfNewRow: number[] = [];
    for (let cellValue of row) {
      if (!lengthOfNewRow.includes(cellValue)) {
        lengthOfNewRow.push(cellValue);
      } else {
        // console.error('Hay algún número repetido');
        correctRow = false;
        break;
      }
    };
    if (!correctRow) {
      break;
    }
  }
  console.info(`${type} ${correctRow ? ' correctas' : ' erróneas'}.`);
  return correctRow;
}

//COMPROBAR QUE LA CUADRÍCULA DE 9 TIENE TODOS SUS NÚMEROS DISTINTOS, Y QUE ESOS NÚMEROS ESTÁN ENTRE EL 1 Y EL 9.
export const checkSquare = (sudoku: number[][], type: string): boolean => {

  let correctSquare = true;

  const sudokuWithSquares = obtainSudokuSquares(sudoku);
  const lengthOfNewSquare: number[] = [];
  for (const square of sudokuWithSquares) {
    for (let cellValue of square) {
      if (!lengthOfNewSquare.includes(cellValue)) {
        lengthOfNewSquare.push(cellValue);
      } else {
        // console.error('Hay algún número repetido');
        correctSquare = false;
        break;
      }
    };
    if (!correctSquare) {
      break;
    }
  }
  console.info(`${type} ${correctSquare ? ' correctas' : ' erróneas'}.`);
  return correctSquare;
}

//COMPROBAR QUE LA FILA TIENE TODOS SUS NÚMEROS DISTINTOS, Y QUE ESOS NÚMEROS ESTÁN ENTRE EL 1 Y EL 9. CAMBIARLOS SI NO ES ASÍ
export const checkAndResolveRow = (row: number[], type: string, rowIndex: number): number[] => {

  const lengthOfNewRow: number[] = [];
  let duplicateRow: number[] = structuredClone(row);
  let index = 0;
  for (let cellValue of row) {
    if (cellValue === 0) {
      cellValue = writeNumberAutomatically(duplicateRow);
      duplicateRow[index] = cellValue;
      index++;
    }
    const correctValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    if (!correctValues.includes(cellValue)) {
      console.error('Hay algún número incorrecto');
      break;
    }
    if (!lengthOfNewRow.includes(cellValue)) {
      lengthOfNewRow.push(cellValue);
    } else {
      cellValue = writeNumberAutomatically(duplicateRow);
      lengthOfNewRow.push(cellValue);
      duplicateRow[index] = cellValue;
      index++;
      // console.error('Hay algún número repetido');
    }
  };
  duplicateRow = structuredClone(lengthOfNewRow);
  // console.info(type, ' correcta');
  return duplicateRow;
}


//COMPROBAR QUE LA CUADRÍCULA DE 9 TIENE TODOS SUS NÚMEROS DISTINTOS, Y QUE ESOS NÚMEROS ESTÁN ENTRE EL 1 Y EL 9. CAMBIARLOS SI NO ES ASÍ
export const checkAndResolveSquare = (square: number[], type: string): number[] => {

  const lengthOfNewSquare: number[] = [];
  let duplicateSquare: number[] = structuredClone(square);
  let index = 0;
  for (let cellValue of square) {
    if (cellValue === 0) {
      cellValue = writeNumberAutomatically(duplicateSquare);
      duplicateSquare[index] = cellValue;
      index++;
    }
    const correctValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    if (!correctValues.includes(cellValue)) {
      console.error('Hay algún número incorrecto');
      break;
    }
    if (!lengthOfNewSquare.includes(cellValue)) {
      lengthOfNewSquare.push(cellValue);
    } else {
      console.error('Hay algún número repetido');
      cellValue = writeNumberAutomatically(lengthOfNewSquare);
      lengthOfNewSquare.push(cellValue);
      duplicateSquare[index] = cellValue;
      index++;
    }
  };
  duplicateSquare = structuredClone(lengthOfNewSquare);
  // console.info(type, ' correcta');
  return duplicateSquare;
}

export const convertSquareSudokuInNormalSudoku = (squares: number[][]): number[][] => {
  const newSudoku: number[][] = [
    [squares[0][0], squares[0][1], squares[0][2], squares[1][0], squares[1][1], squares[1][2], squares[2][0], squares[2][1], squares[2][2]],
    [squares[0][3], squares[0][4], squares[0][5], squares[1][3], squares[1][4], squares[1][5], squares[2][3], squares[2][4], squares[2][5]],
    [squares[0][6], squares[0][7], squares[0][8], squares[1][6], squares[1][7], squares[1][8], squares[2][6], squares[2][7], squares[2][8]],
    [squares[3][0], squares[3][1], squares[3][2], squares[4][0], squares[4][1], squares[4][2], squares[5][0], squares[5][1], squares[5][2]],
    [squares[3][3], squares[3][4], squares[3][5], squares[4][3], squares[4][4], squares[4][5], squares[5][3], squares[5][4], squares[5][5]],
    [squares[3][6], squares[3][7], squares[3][8], squares[4][6], squares[4][7], squares[4][8], squares[5][6], squares[5][7], squares[5][8]],
    [squares[6][0], squares[6][1], squares[6][2], squares[7][0], squares[7][1], squares[7][2], squares[8][0], squares[8][1], squares[8][2]],
    [squares[6][3], squares[6][4], squares[6][5], squares[7][3], squares[7][4], squares[7][5], squares[8][3], squares[8][4], squares[8][5]],
    [squares[6][6], squares[6][7], squares[6][8], squares[7][6], squares[7][7], squares[7][8], squares[8][6], squares[8][7], squares[8][8]],

  ];
  return newSudoku;
}



//OBTENER TODOS LOS SQUARES DEL SUDOKU (LOS 9 CUADROS, DE IZQUIERDA A DERECHA Y DE ARRIBA A ABAJO)
export const obtainSudokuSquares = (sudokuValues: number[][]) => {
  const square1 = [sudokuValues[0][0], sudokuValues[0][1], sudokuValues[0][2], sudokuValues[1][0], sudokuValues[1][1], sudokuValues[1][2], sudokuValues[2][0], sudokuValues[2][1], sudokuValues[2][2],];
  const square2 = [sudokuValues[0][3], sudokuValues[0][4], sudokuValues[0][5], sudokuValues[1][3], sudokuValues[1][4], sudokuValues[1][5], sudokuValues[2][3], sudokuValues[2][4], sudokuValues[2][5],];
  const square3 = [sudokuValues[0][6], sudokuValues[0][7], sudokuValues[0][8], sudokuValues[1][6], sudokuValues[1][7], sudokuValues[1][8], sudokuValues[2][6], sudokuValues[2][7], sudokuValues[2][8],];
  const square4 = [sudokuValues[3][0], sudokuValues[3][1], sudokuValues[3][2], sudokuValues[4][0], sudokuValues[4][1], sudokuValues[4][2], sudokuValues[5][0], sudokuValues[5][1], sudokuValues[5][2],];
  const square5 = [sudokuValues[3][3], sudokuValues[3][4], sudokuValues[3][5], sudokuValues[4][3], sudokuValues[4][4], sudokuValues[4][5], sudokuValues[5][3], sudokuValues[5][4], sudokuValues[5][5],];
  const square6 = [sudokuValues[3][6], sudokuValues[3][7], sudokuValues[3][8], sudokuValues[4][6], sudokuValues[4][7], sudokuValues[4][8], sudokuValues[5][6], sudokuValues[5][7], sudokuValues[5][8],];
  const square7 = [sudokuValues[6][0], sudokuValues[6][1], sudokuValues[6][2], sudokuValues[7][0], sudokuValues[7][1], sudokuValues[7][2], sudokuValues[8][0], sudokuValues[8][1], sudokuValues[8][2],];
  const square8 = [sudokuValues[6][3], sudokuValues[6][4], sudokuValues[6][5], sudokuValues[7][3], sudokuValues[7][4], sudokuValues[7][5], sudokuValues[8][3], sudokuValues[8][4], sudokuValues[8][5],];
  const square9 = [sudokuValues[6][6], sudokuValues[6][7], sudokuValues[6][8], sudokuValues[7][6], sudokuValues[7][7], sudokuValues[7][8], sudokuValues[8][6], sudokuValues[8][7], sudokuValues[8][8],];

  const sudokuWithSquares = [square1, square2, square3, square4, square5, square6, square7, square8, square9];

  return sudokuWithSquares;
}