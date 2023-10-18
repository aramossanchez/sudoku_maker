import { useState } from "react";
import { checkAndResolveRow, checkAndResolveSquare, checkRow, checkSquare, convertSquareSudokuInNormalSudoku, obtainSudokuSquares, writeNumberAutomatically } from "./Services/Operations.service";

export function UseSudokuSolver() {

  const [sudokuValues, setSudokuValues] = useState([
    [
      { value: 0, rowIndex: 0, columnIndex: 0, squareIndex: 0 },
      { value: 0, rowIndex: 0, columnIndex: 1, squareIndex: 0 },
      { value: 0, rowIndex: 0, columnIndex: 2, squareIndex: 0 },
      { value: 0, rowIndex: 0, columnIndex: 3, squareIndex: 1 },
      { value: 0, rowIndex: 0, columnIndex: 4, squareIndex: 1 },
      { value: 0, rowIndex: 0, columnIndex: 5, squareIndex: 1 },
      { value: 0, rowIndex: 0, columnIndex: 6, squareIndex: 2 },
      { value: 0, rowIndex: 0, columnIndex: 7, squareIndex: 2 },
      { value: 0, rowIndex: 0, columnIndex: 8, squareIndex: 2 },
    ],
    [
      { value: 0, rowIndex: 1, columnIndex: 0, squareIndex: 0 },
      { value: 0, rowIndex: 1, columnIndex: 1, squareIndex: 0 },
      { value: 0, rowIndex: 1, columnIndex: 2, squareIndex: 0 },
      { value: 0, rowIndex: 1, columnIndex: 3, squareIndex: 1 },
      { value: 0, rowIndex: 1, columnIndex: 4, squareIndex: 1 },
      { value: 0, rowIndex: 1, columnIndex: 5, squareIndex: 1 },
      { value: 0, rowIndex: 1, columnIndex: 6, squareIndex: 2 },
      { value: 0, rowIndex: 1, columnIndex: 7, squareIndex: 2 },
      { value: 0, rowIndex: 1, columnIndex: 8, squareIndex: 2 },
    ],
    [
      { value: 0, rowIndex: 2, columnIndex: 0, squareIndex: 0 },
      { value: 0, rowIndex: 2, columnIndex: 1, squareIndex: 0 },
      { value: 0, rowIndex: 2, columnIndex: 2, squareIndex: 0 },
      { value: 0, rowIndex: 2, columnIndex: 3, squareIndex: 1 },
      { value: 0, rowIndex: 2, columnIndex: 4, squareIndex: 1 },
      { value: 0, rowIndex: 2, columnIndex: 5, squareIndex: 1 },
      { value: 0, rowIndex: 2, columnIndex: 6, squareIndex: 2 },
      { value: 0, rowIndex: 2, columnIndex: 7, squareIndex: 2 },
      { value: 0, rowIndex: 2, columnIndex: 8, squareIndex: 2 },
    ],
    [
      { value: 0, rowIndex: 3, columnIndex: 0, squareIndex: 3 },
      { value: 0, rowIndex: 3, columnIndex: 1, squareIndex: 3 },
      { value: 0, rowIndex: 3, columnIndex: 2, squareIndex: 3 },
      { value: 0, rowIndex: 3, columnIndex: 3, squareIndex: 4 },
      { value: 0, rowIndex: 3, columnIndex: 4, squareIndex: 4 },
      { value: 0, rowIndex: 3, columnIndex: 5, squareIndex: 4 },
      { value: 0, rowIndex: 3, columnIndex: 6, squareIndex: 5 },
      { value: 0, rowIndex: 3, columnIndex: 7, squareIndex: 5 },
      { value: 0, rowIndex: 3, columnIndex: 8, squareIndex: 5 },
    ],
    [
      { value: 0, rowIndex: 4, columnIndex: 0, squareIndex: 3 },
      { value: 0, rowIndex: 4, columnIndex: 1, squareIndex: 3 },
      { value: 0, rowIndex: 4, columnIndex: 2, squareIndex: 3 },
      { value: 0, rowIndex: 4, columnIndex: 3, squareIndex: 4 },
      { value: 0, rowIndex: 4, columnIndex: 4, squareIndex: 4 },
      { value: 0, rowIndex: 4, columnIndex: 5, squareIndex: 4 },
      { value: 0, rowIndex: 4, columnIndex: 6, squareIndex: 5 },
      { value: 0, rowIndex: 4, columnIndex: 7, squareIndex: 5 },
      { value: 0, rowIndex: 4, columnIndex: 8, squareIndex: 5 },
    ],
    [
      { value: 0, rowIndex: 5, columnIndex: 0, squareIndex: 3 },
      { value: 0, rowIndex: 5, columnIndex: 1, squareIndex: 3 },
      { value: 0, rowIndex: 5, columnIndex: 2, squareIndex: 3 },
      { value: 0, rowIndex: 5, columnIndex: 3, squareIndex: 4 },
      { value: 0, rowIndex: 5, columnIndex: 4, squareIndex: 4 },
      { value: 0, rowIndex: 5, columnIndex: 5, squareIndex: 4 },
      { value: 0, rowIndex: 5, columnIndex: 6, squareIndex: 5 },
      { value: 0, rowIndex: 5, columnIndex: 7, squareIndex: 5 },
      { value: 0, rowIndex: 5, columnIndex: 8, squareIndex: 5 },
    ],
    [
      { value: 0, rowIndex: 6, columnIndex: 0, squareIndex: 6 },
      { value: 0, rowIndex: 6, columnIndex: 1, squareIndex: 6 },
      { value: 0, rowIndex: 6, columnIndex: 2, squareIndex: 6 },
      { value: 0, rowIndex: 6, columnIndex: 3, squareIndex: 7 },
      { value: 0, rowIndex: 6, columnIndex: 4, squareIndex: 7 },
      { value: 0, rowIndex: 6, columnIndex: 5, squareIndex: 7 },
      { value: 0, rowIndex: 6, columnIndex: 6, squareIndex: 8 },
      { value: 0, rowIndex: 6, columnIndex: 7, squareIndex: 8 },
      { value: 0, rowIndex: 6, columnIndex: 8, squareIndex: 8 },
    ],
    [
      { value: 0, rowIndex: 7, columnIndex: 0, squareIndex: 6 },
      { value: 0, rowIndex: 7, columnIndex: 1, squareIndex: 6 },
      { value: 0, rowIndex: 7, columnIndex: 2, squareIndex: 6 },
      { value: 0, rowIndex: 7, columnIndex: 3, squareIndex: 7 },
      { value: 0, rowIndex: 7, columnIndex: 4, squareIndex: 7 },
      { value: 0, rowIndex: 7, columnIndex: 5, squareIndex: 7 },
      { value: 0, rowIndex: 7, columnIndex: 6, squareIndex: 8 },
      { value: 0, rowIndex: 7, columnIndex: 7, squareIndex: 8 },
      { value: 0, rowIndex: 7, columnIndex: 8, squareIndex: 8 },
    ],
    [
      { value: 0, rowIndex: 8, columnIndex: 0, squareIndex: 6 },
      { value: 0, rowIndex: 8, columnIndex: 1, squareIndex: 6 },
      { value: 0, rowIndex: 8, columnIndex: 2, squareIndex: 6 },
      { value: 0, rowIndex: 8, columnIndex: 3, squareIndex: 7 },
      { value: 0, rowIndex: 8, columnIndex: 4, squareIndex: 7 },
      { value: 0, rowIndex: 8, columnIndex: 5, squareIndex: 7 },
      { value: 0, rowIndex: 8, columnIndex: 6, squareIndex: 8 },
      { value: 0, rowIndex: 8, columnIndex: 7, squareIndex: 8 },
      { value: 0, rowIndex: 8, columnIndex: 8, squareIndex: 8 },
    ],
  ]);
  const [solving, setSolving] = useState(false);
  const [tries, setTries] = useState(0);

  // INSERTAR UN VALOR EN UNA CELDA DEL SUDOKU
  const insertValueInCell = (rowIndex: number, columnIndex: number, squareIndex: number, value: number) => {
    const copyOfSudoku = structuredClone(sudokuValues);
    copyOfSudoku[rowIndex][columnIndex].value = value
    setSudokuValues(copyOfSudoku);
  }

  const checkAndResolveFullSudoku = (sudoku: { value: number, rowIndex: number, columnIndex: number, squareIndex: number }[][]) => {
    setSolving(true);
    const copyOfSudokuValue = structuredClone(sudoku);
    const writeEmptyValues = (cell: { value: number, rowIndex: number, columnIndex: number, squareIndex: number }) => {

      //VALORES DE ROW
      const cellsOfRow = copyOfSudokuValue.flat().filter((row) => row.rowIndex === cell.rowIndex);
      const valuesOfRow = cellsOfRow.map((cell) => {
        return cell.value
      })

      //VALORES DE COLUMN
      const cellsOfColumn = copyOfSudokuValue.flat().filter((row) => row.columnIndex === cell.columnIndex);
      const valuesOfColumn = cellsOfColumn.map((cell) => {
        return cell.value
      })

      //VALORES DE SQUARE
      const cellsOfSquare = copyOfSudokuValue.flat().filter((row) => row.squareIndex === cell.squareIndex);
      const valuesOfSquare = cellsOfSquare.map((cell) => {
        return cell.value
      })

      //ESCRIBIR NÚMERO AUTOMÁTICAMENTE, TENIENDO EN CUENTA QUE NO EXISTE EN LA FILA ACTUAL, EN LA COLUMNA ACTUAL Y EN LA CUADRÍCULA ACTUAL
      if (cell.value === 0) {
        copyOfSudokuValue[cell.rowIndex][cell.columnIndex].value = writeNumberAutomatically(valuesOfRow, valuesOfColumn, valuesOfSquare);
      }
      // if (valuesOfRow.includes(cell.value) || valuesOfColumn.includes(cell.value) || cell.value === 0) {
      //   copyOfSudokuValue[cell.rowIndex][cell.columnIndex].value = writeNumberAutomatically(valuesOfRow, valuesOfColumn, valuesOfSquare);
      // }
    }
    copyOfSudokuValue.forEach(row => {
      row.forEach(cell => {
        writeEmptyValues(cell);
      });
    });
    let counter = structuredClone(tries);
    console.log(counter);
    setTries(counter + 1);
    // copyOfSudokuValue[0].forEach(row => {
    //   writeEmptyValues(row);
    // });
    // copyOfSudokuValue[1].forEach(row => {
    //   writeEmptyValues(row);
    // });

    setSudokuValues(copyOfSudokuValue);
    setSolving(false);
  }

  const resetSudoku = () => {
    setTries(0);
    setSudokuValues([
      [
        { value: 0, rowIndex: 0, columnIndex: 0, squareIndex: 0 },
        { value: 0, rowIndex: 0, columnIndex: 1, squareIndex: 0 },
        { value: 0, rowIndex: 0, columnIndex: 2, squareIndex: 0 },
        { value: 0, rowIndex: 0, columnIndex: 3, squareIndex: 1 },
        { value: 0, rowIndex: 0, columnIndex: 4, squareIndex: 1 },
        { value: 0, rowIndex: 0, columnIndex: 5, squareIndex: 1 },
        { value: 0, rowIndex: 0, columnIndex: 6, squareIndex: 2 },
        { value: 0, rowIndex: 0, columnIndex: 7, squareIndex: 2 },
        { value: 0, rowIndex: 0, columnIndex: 8, squareIndex: 2 },
      ],
      [
        { value: 0, rowIndex: 1, columnIndex: 0, squareIndex: 0 },
        { value: 0, rowIndex: 1, columnIndex: 1, squareIndex: 0 },
        { value: 0, rowIndex: 1, columnIndex: 2, squareIndex: 0 },
        { value: 0, rowIndex: 1, columnIndex: 3, squareIndex: 1 },
        { value: 0, rowIndex: 1, columnIndex: 4, squareIndex: 1 },
        { value: 0, rowIndex: 1, columnIndex: 5, squareIndex: 1 },
        { value: 0, rowIndex: 1, columnIndex: 6, squareIndex: 2 },
        { value: 0, rowIndex: 1, columnIndex: 7, squareIndex: 2 },
        { value: 0, rowIndex: 1, columnIndex: 8, squareIndex: 2 },
      ],
      [
        { value: 0, rowIndex: 2, columnIndex: 0, squareIndex: 0 },
        { value: 0, rowIndex: 2, columnIndex: 1, squareIndex: 0 },
        { value: 0, rowIndex: 2, columnIndex: 2, squareIndex: 0 },
        { value: 0, rowIndex: 2, columnIndex: 3, squareIndex: 1 },
        { value: 0, rowIndex: 2, columnIndex: 4, squareIndex: 1 },
        { value: 0, rowIndex: 2, columnIndex: 5, squareIndex: 1 },
        { value: 0, rowIndex: 2, columnIndex: 6, squareIndex: 2 },
        { value: 0, rowIndex: 2, columnIndex: 7, squareIndex: 2 },
        { value: 0, rowIndex: 2, columnIndex: 8, squareIndex: 2 },
      ],
      [
        { value: 0, rowIndex: 3, columnIndex: 0, squareIndex: 3 },
        { value: 0, rowIndex: 3, columnIndex: 1, squareIndex: 3 },
        { value: 0, rowIndex: 3, columnIndex: 2, squareIndex: 3 },
        { value: 0, rowIndex: 3, columnIndex: 3, squareIndex: 4 },
        { value: 0, rowIndex: 3, columnIndex: 4, squareIndex: 4 },
        { value: 0, rowIndex: 3, columnIndex: 5, squareIndex: 4 },
        { value: 0, rowIndex: 3, columnIndex: 6, squareIndex: 5 },
        { value: 0, rowIndex: 3, columnIndex: 7, squareIndex: 5 },
        { value: 0, rowIndex: 3, columnIndex: 8, squareIndex: 5 },
      ],
      [
        { value: 0, rowIndex: 4, columnIndex: 0, squareIndex: 3 },
        { value: 0, rowIndex: 4, columnIndex: 1, squareIndex: 3 },
        { value: 0, rowIndex: 4, columnIndex: 2, squareIndex: 3 },
        { value: 0, rowIndex: 4, columnIndex: 3, squareIndex: 4 },
        { value: 0, rowIndex: 4, columnIndex: 4, squareIndex: 4 },
        { value: 0, rowIndex: 4, columnIndex: 5, squareIndex: 4 },
        { value: 0, rowIndex: 4, columnIndex: 6, squareIndex: 5 },
        { value: 0, rowIndex: 4, columnIndex: 7, squareIndex: 5 },
        { value: 0, rowIndex: 4, columnIndex: 8, squareIndex: 5 },
      ],
      [
        { value: 0, rowIndex: 5, columnIndex: 0, squareIndex: 3 },
        { value: 0, rowIndex: 5, columnIndex: 1, squareIndex: 3 },
        { value: 0, rowIndex: 5, columnIndex: 2, squareIndex: 3 },
        { value: 0, rowIndex: 5, columnIndex: 3, squareIndex: 4 },
        { value: 0, rowIndex: 5, columnIndex: 4, squareIndex: 4 },
        { value: 0, rowIndex: 5, columnIndex: 5, squareIndex: 4 },
        { value: 0, rowIndex: 5, columnIndex: 6, squareIndex: 5 },
        { value: 0, rowIndex: 5, columnIndex: 7, squareIndex: 5 },
        { value: 0, rowIndex: 5, columnIndex: 8, squareIndex: 5 },
      ],
      [
        { value: 0, rowIndex: 6, columnIndex: 0, squareIndex: 6 },
        { value: 0, rowIndex: 6, columnIndex: 1, squareIndex: 6 },
        { value: 0, rowIndex: 6, columnIndex: 2, squareIndex: 6 },
        { value: 0, rowIndex: 6, columnIndex: 3, squareIndex: 7 },
        { value: 0, rowIndex: 6, columnIndex: 4, squareIndex: 7 },
        { value: 0, rowIndex: 6, columnIndex: 5, squareIndex: 7 },
        { value: 0, rowIndex: 6, columnIndex: 6, squareIndex: 8 },
        { value: 0, rowIndex: 6, columnIndex: 7, squareIndex: 8 },
        { value: 0, rowIndex: 6, columnIndex: 8, squareIndex: 8 },
      ],
      [
        { value: 0, rowIndex: 7, columnIndex: 0, squareIndex: 6 },
        { value: 0, rowIndex: 7, columnIndex: 1, squareIndex: 6 },
        { value: 0, rowIndex: 7, columnIndex: 2, squareIndex: 6 },
        { value: 0, rowIndex: 7, columnIndex: 3, squareIndex: 7 },
        { value: 0, rowIndex: 7, columnIndex: 4, squareIndex: 7 },
        { value: 0, rowIndex: 7, columnIndex: 5, squareIndex: 7 },
        { value: 0, rowIndex: 7, columnIndex: 6, squareIndex: 8 },
        { value: 0, rowIndex: 7, columnIndex: 7, squareIndex: 8 },
        { value: 0, rowIndex: 7, columnIndex: 8, squareIndex: 8 },
      ],
      [
        { value: 0, rowIndex: 8, columnIndex: 0, squareIndex: 6 },
        { value: 0, rowIndex: 8, columnIndex: 1, squareIndex: 6 },
        { value: 0, rowIndex: 8, columnIndex: 2, squareIndex: 6 },
        { value: 0, rowIndex: 8, columnIndex: 3, squareIndex: 7 },
        { value: 0, rowIndex: 8, columnIndex: 4, squareIndex: 7 },
        { value: 0, rowIndex: 8, columnIndex: 5, squareIndex: 7 },
        { value: 0, rowIndex: 8, columnIndex: 6, squareIndex: 8 },
        { value: 0, rowIndex: 8, columnIndex: 7, squareIndex: 8 },
        { value: 0, rowIndex: 8, columnIndex: 8, squareIndex: 8 },
      ],
    ])
  }

  return { tries, sudokuValues, solving, insertValueInCell, checkAndResolveFullSudoku, resetSudoku }
}
