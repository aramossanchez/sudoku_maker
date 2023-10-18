import { useEffect, useState } from "react";
import { checkAndResolveRow, checkAndResolveSquare, checkRow, checkSquare, convertSquareSudokuInNormalSudoku, obtainSudokuSquares } from "./Services/Operations.service";

export function UseSudokuSolver() {

  const [sudokuValues, setSudokuValues] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [solving, setSolving] = useState(false);

  // INSERTAR UN VALOR EN UNA CELDA DEL SUDOKU
  const insertValueInCell = (row: number, cell: number, value: number) => {
    const copyOfSudoku = structuredClone(sudokuValues);
    copyOfSudoku[row][cell] = value;
    setSudokuValues(copyOfSudoku);
  }

  const obtainSudokuColumns = () => {
    const column1 = [sudokuValues[0][0], sudokuValues[1][0], sudokuValues[2][0], sudokuValues[3][0], sudokuValues[4][0], sudokuValues[5][0], sudokuValues[6][0], sudokuValues[7][0], sudokuValues[8][0]];
    const column2 = [sudokuValues[0][1], sudokuValues[1][1], sudokuValues[2][1], sudokuValues[3][1], sudokuValues[4][1], sudokuValues[5][1], sudokuValues[6][1], sudokuValues[7][1], sudokuValues[8][1]];
    const column3 = [sudokuValues[0][2], sudokuValues[1][2], sudokuValues[2][2], sudokuValues[3][2], sudokuValues[4][2], sudokuValues[5][2], sudokuValues[6][2], sudokuValues[7][2], sudokuValues[8][2]];
    const column4 = [sudokuValues[0][3], sudokuValues[1][3], sudokuValues[2][3], sudokuValues[3][3], sudokuValues[4][3], sudokuValues[5][3], sudokuValues[6][3], sudokuValues[7][3], sudokuValues[8][3]];
    const column5 = [sudokuValues[0][4], sudokuValues[1][4], sudokuValues[2][4], sudokuValues[3][4], sudokuValues[4][4], sudokuValues[5][4], sudokuValues[6][4], sudokuValues[7][4], sudokuValues[8][4]];
    const column6 = [sudokuValues[0][5], sudokuValues[1][5], sudokuValues[2][5], sudokuValues[3][5], sudokuValues[4][5], sudokuValues[5][5], sudokuValues[6][5], sudokuValues[7][5], sudokuValues[8][5]];
    const column7 = [sudokuValues[0][6], sudokuValues[1][6], sudokuValues[2][6], sudokuValues[3][6], sudokuValues[4][6], sudokuValues[5][6], sudokuValues[6][6], sudokuValues[7][6], sudokuValues[8][6]];
    const column8 = [sudokuValues[0][7], sudokuValues[1][7], sudokuValues[2][7], sudokuValues[3][7], sudokuValues[4][7], sudokuValues[5][7], sudokuValues[6][7], sudokuValues[7][7], sudokuValues[8][7]];
    const column9 = [sudokuValues[0][8], sudokuValues[1][8], sudokuValues[2][8], sudokuValues[3][8], sudokuValues[4][8], sudokuValues[5][8], sudokuValues[6][8], sudokuValues[7][8], sudokuValues[8][8]];

    const sudokuWithColumns = [column1, column2, column3, column4, column5, column6, column7, column8, column9];

    return sudokuWithColumns;
  }

  const checkFullSudoku = (sudoku: number[][]): boolean => {
    let correctSudoku = true;
    const correctRows = checkRow(sudoku, 'Filas');
    const correctSquares = checkSquare(sudoku, 'Cuadrículas');
    if (!correctRows || !correctSquares) {
      correctSudoku = false;
    }
    return correctSudoku;
  }

  const checkAndResolveFullSudoku = (sudokuValues: number[][]) => {
    let index = 1;
    setSolving(true);
    let sudokuOk = true;
    let resolvedSudoku = [];

    // BUCLE QUE COMPRUEBA FILAS Y CUADRÍCULAS. SI ESTÁN MAL, LAS CORRIGE. DESPUÉS DE CORREGIRLAS, COMPRUEBA SI HAY ERRORES. SI LOS HAY, VUELVE A CORREGIRLOS.
    do {
      console.log('Vuelta número ', index); const sudokuValuesForState = structuredClone(sudokuValues);

      //COMPROBAR SI LAS FILAS SON CORRECTAS Y EDITARLAS
      sudokuValuesForState.forEach((row, index) => {
        sudokuValuesForState[index] = checkAndResolveRow(row, 'Fila', index);
        // console.log('Fila comprobada');
      });

      //COMPROBAR SI LAS CUADRÍCULAS SON CORRECTAS Y EDITARLAS
      let squares = obtainSudokuSquares(sudokuValuesForState);
      squares.forEach((square, index) => {
        squares[index] = checkAndResolveSquare(square, 'Cuadrícula');
        // console.log('Cuadrícula comprobada');
      });
      squares = convertSquareSudokuInNormalSudoku(squares);

      //COMPROBAR SI LAS COLUMNAS SON CORRECTAS
      // const columns = obtainSudokuColumns();
      // columns.forEach(column => {
      //   // checkZone(column, 'Columna');
      //   console.log('Columna comprobada');
      // });

      index++;
      resolvedSudoku = squares;
      sudokuOk = checkFullSudoku(squares);
    } while (index < 2000 || sudokuOk);

    setSudokuValues(resolvedSudoku);
    setSolving(false);
  }

  const resetSudoku = () => {
    setSudokuValues([
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ])
  }

  return { sudokuValues, solving, insertValueInCell, checkAndResolveFullSudoku, resetSudoku }
}
