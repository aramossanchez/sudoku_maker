import { useState } from "react";
import { checkAndResolveRow, checkAndResolveSquare, checkRow, checkSquare, convertSquareSudokuInNormalSudoku, obtainSudokuSquares, writeNumberAutomatically } from "./Services/Operations.service";

export function UseSudokuSolver() {

  const [sudokuValues, setSudokuValues] = useState([
    [
      { value: 0, rowIndex: 0, columnIndex: 0, squareIndex: 0 },
      { value: 5, rowIndex: 0, columnIndex: 1, squareIndex: 0 },
      { value: 0, rowIndex: 0, columnIndex: 2, squareIndex: 0 },
      { value: 0, rowIndex: 0, columnIndex: 3, squareIndex: 1 },
      { value: 0, rowIndex: 0, columnIndex: 4, squareIndex: 1 },
      { value: 4, rowIndex: 0, columnIndex: 5, squareIndex: 1 },
      { value: 2, rowIndex: 0, columnIndex: 6, squareIndex: 2 },
      { value: 0, rowIndex: 0, columnIndex: 7, squareIndex: 2 },
      { value: 0, rowIndex: 0, columnIndex: 8, squareIndex: 2 },
    ],
    [
      { value: 0, rowIndex: 1, columnIndex: 0, squareIndex: 0 },
      { value: 0, rowIndex: 1, columnIndex: 1, squareIndex: 0 },
      { value: 9, rowIndex: 1, columnIndex: 2, squareIndex: 0 },
      { value: 0, rowIndex: 1, columnIndex: 3, squareIndex: 1 },
      { value: 0, rowIndex: 1, columnIndex: 4, squareIndex: 1 },
      { value: 0, rowIndex: 1, columnIndex: 5, squareIndex: 1 },
      { value: 0, rowIndex: 1, columnIndex: 6, squareIndex: 2 },
      { value: 0, rowIndex: 1, columnIndex: 7, squareIndex: 2 },
      { value: 0, rowIndex: 1, columnIndex: 8, squareIndex: 2 },
    ],
    [
      { value: 0, rowIndex: 2, columnIndex: 0, squareIndex: 0 },
      { value: 3, rowIndex: 2, columnIndex: 1, squareIndex: 0 },
      { value: 2, rowIndex: 2, columnIndex: 2, squareIndex: 0 },
      { value: 0, rowIndex: 2, columnIndex: 3, squareIndex: 1 },
      { value: 6, rowIndex: 2, columnIndex: 4, squareIndex: 1 },
      { value: 9, rowIndex: 2, columnIndex: 5, squareIndex: 1 },
      { value: 7, rowIndex: 2, columnIndex: 6, squareIndex: 2 },
      { value: 8, rowIndex: 2, columnIndex: 7, squareIndex: 2 },
      { value: 0, rowIndex: 2, columnIndex: 8, squareIndex: 2 },
    ],
    [
      { value: 6, rowIndex: 3, columnIndex: 0, squareIndex: 3 },
      { value: 0, rowIndex: 3, columnIndex: 1, squareIndex: 3 },
      { value: 1, rowIndex: 3, columnIndex: 2, squareIndex: 3 },
      { value: 0, rowIndex: 3, columnIndex: 3, squareIndex: 4 },
      { value: 7, rowIndex: 3, columnIndex: 4, squareIndex: 4 },
      { value: 0, rowIndex: 3, columnIndex: 5, squareIndex: 4 },
      { value: 0, rowIndex: 3, columnIndex: 6, squareIndex: 5 },
      { value: 0, rowIndex: 3, columnIndex: 7, squareIndex: 5 },
      { value: 4, rowIndex: 3, columnIndex: 8, squareIndex: 5 },
    ],
    [
      { value: 9, rowIndex: 4, columnIndex: 0, squareIndex: 3 },
      { value: 4, rowIndex: 4, columnIndex: 1, squareIndex: 3 },
      { value: 0, rowIndex: 4, columnIndex: 2, squareIndex: 3 },
      { value: 3, rowIndex: 4, columnIndex: 3, squareIndex: 4 },
      { value: 2, rowIndex: 4, columnIndex: 4, squareIndex: 4 },
      { value: 8, rowIndex: 4, columnIndex: 5, squareIndex: 4 },
      { value: 0, rowIndex: 4, columnIndex: 6, squareIndex: 5 },
      { value: 0, rowIndex: 4, columnIndex: 7, squareIndex: 5 },
      { value: 0, rowIndex: 4, columnIndex: 8, squareIndex: 5 },
    ],
    [
      { value: 7, rowIndex: 5, columnIndex: 0, squareIndex: 3 },
      { value: 0, rowIndex: 5, columnIndex: 1, squareIndex: 3 },
      { value: 3, rowIndex: 5, columnIndex: 2, squareIndex: 3 },
      { value: 4, rowIndex: 5, columnIndex: 3, squareIndex: 4 },
      { value: 1, rowIndex: 5, columnIndex: 4, squareIndex: 4 },
      { value: 0, rowIndex: 5, columnIndex: 5, squareIndex: 4 },
      { value: 8, rowIndex: 5, columnIndex: 6, squareIndex: 5 },
      { value: 5, rowIndex: 5, columnIndex: 7, squareIndex: 5 },
      { value: 0, rowIndex: 5, columnIndex: 8, squareIndex: 5 },
    ],
    [
      { value: 3, rowIndex: 6, columnIndex: 0, squareIndex: 6 },
      { value: 0, rowIndex: 6, columnIndex: 1, squareIndex: 6 },
      { value: 7, rowIndex: 6, columnIndex: 2, squareIndex: 6 },
      { value: 0, rowIndex: 6, columnIndex: 3, squareIndex: 7 },
      { value: 0, rowIndex: 6, columnIndex: 4, squareIndex: 7 },
      { value: 0, rowIndex: 6, columnIndex: 5, squareIndex: 7 },
      { value: 0, rowIndex: 6, columnIndex: 6, squareIndex: 8 },
      { value: 0, rowIndex: 6, columnIndex: 7, squareIndex: 8 },
      { value: 0, rowIndex: 6, columnIndex: 8, squareIndex: 8 },
    ],
    [
      { value: 2, rowIndex: 7, columnIndex: 0, squareIndex: 6 },
      { value: 0, rowIndex: 7, columnIndex: 1, squareIndex: 6 },
      { value: 8, rowIndex: 7, columnIndex: 2, squareIndex: 6 },
      { value: 6, rowIndex: 7, columnIndex: 3, squareIndex: 7 },
      { value: 4, rowIndex: 7, columnIndex: 4, squareIndex: 7 },
      { value: 0, rowIndex: 7, columnIndex: 5, squareIndex: 7 },
      { value: 0, rowIndex: 7, columnIndex: 6, squareIndex: 8 },
      { value: 3, rowIndex: 7, columnIndex: 7, squareIndex: 8 },
      { value: 0, rowIndex: 7, columnIndex: 8, squareIndex: 8 },
    ],
    [
      { value: 5, rowIndex: 8, columnIndex: 0, squareIndex: 6 },
      { value: 0, rowIndex: 8, columnIndex: 1, squareIndex: 6 },
      { value: 4, rowIndex: 8, columnIndex: 2, squareIndex: 6 },
      { value: 2, rowIndex: 8, columnIndex: 3, squareIndex: 7 },
      { value: 0, rowIndex: 8, columnIndex: 4, squareIndex: 7 },
      { value: 3, rowIndex: 8, columnIndex: 5, squareIndex: 7 },
      { value: 6, rowIndex: 8, columnIndex: 6, squareIndex: 8 },
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

    //SABER SI LAS FILAS TIENEN SOLO UN NÚMERO POR RELLENAR, Y RELLENARLO
    //SABER SI LAS COLUMNAS TIENEN SOLO UN NÚMERO POR RELLENAR, Y RELLENARLO
    //SABER SI LAS CUADRÍCULAS TIENEN SOLO UN NÚMERO POR RELLENAR, Y RELLENARLO

    //OBTENER CELLS CON LOS VALORES QUE TIENE CADA SQUARE
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const cellsInSquare: { value: number, rowIndex: number, columnIndex: number, squareIndex: number }[][] = [];
    numbers.forEach(number => {
      cellsInSquare.push(copyOfSudokuValue.flat().filter((cell) => cell.value !== 0 && cell.squareIndex === (number - 1)));
    });

    //OBTENER SOLO LOS VALORES QUE TIENE CADA SQUARE
    const numbersInSquare: number[][] = []
    for (let i = 0; i < cellsInSquare.length; i++) {
      const rows: number[] = [];
      for (let e = 0; e < cellsInSquare[i].length; e++) {
        rows.push(cellsInSquare[i][e].value);
      }
      numbersInSquare.push(rows);
    }

    //OBTENER QUÉ VALORES TIENE DISPONIBLES PARA RELLENAR CADA SQUARE
    const availableNumberInSquare: number[][] = [];
    for (let i = 0; i < numbersInSquare.length; i++) {
      const availableNumbers: number[] = [];
      numbers.forEach(number => {
        if (!numbersInSquare[i].includes(number)) {
          availableNumbers.push(number)
        }
      });
      availableNumberInSquare.push(availableNumbers);
    }

    //SABER QUÉ NÚMEROS SE PUEDEN PONER EN CADA CELDA, REVISANDO CON FILAS Y COLUMNAS. SI SOLO SE PUEDE PONER UNO, RELLENARLO.
    

    console.log(availableNumberInSquare);
    setSudokuValues(copyOfSudokuValue);
    setSolving(false);
  }

  const resetSudoku = () => {
    setTries(0);
    setSudokuValues([
      [
        { value: 0, rowIndex: 0, columnIndex: 0, squareIndex: 0 },
        { value: 5, rowIndex: 0, columnIndex: 1, squareIndex: 0 },
        { value: 0, rowIndex: 0, columnIndex: 2, squareIndex: 0 },
        { value: 0, rowIndex: 0, columnIndex: 3, squareIndex: 1 },
        { value: 0, rowIndex: 0, columnIndex: 4, squareIndex: 1 },
        { value: 4, rowIndex: 0, columnIndex: 5, squareIndex: 1 },
        { value: 2, rowIndex: 0, columnIndex: 6, squareIndex: 2 },
        { value: 0, rowIndex: 0, columnIndex: 7, squareIndex: 2 },
        { value: 0, rowIndex: 0, columnIndex: 8, squareIndex: 2 },
      ],
      [
        { value: 0, rowIndex: 1, columnIndex: 0, squareIndex: 0 },
        { value: 0, rowIndex: 1, columnIndex: 1, squareIndex: 0 },
        { value: 9, rowIndex: 1, columnIndex: 2, squareIndex: 0 },
        { value: 0, rowIndex: 1, columnIndex: 3, squareIndex: 1 },
        { value: 0, rowIndex: 1, columnIndex: 4, squareIndex: 1 },
        { value: 0, rowIndex: 1, columnIndex: 5, squareIndex: 1 },
        { value: 0, rowIndex: 1, columnIndex: 6, squareIndex: 2 },
        { value: 0, rowIndex: 1, columnIndex: 7, squareIndex: 2 },
        { value: 0, rowIndex: 1, columnIndex: 8, squareIndex: 2 },
      ],
      [
        { value: 0, rowIndex: 2, columnIndex: 0, squareIndex: 0 },
        { value: 3, rowIndex: 2, columnIndex: 1, squareIndex: 0 },
        { value: 2, rowIndex: 2, columnIndex: 2, squareIndex: 0 },
        { value: 0, rowIndex: 2, columnIndex: 3, squareIndex: 1 },
        { value: 6, rowIndex: 2, columnIndex: 4, squareIndex: 1 },
        { value: 9, rowIndex: 2, columnIndex: 5, squareIndex: 1 },
        { value: 7, rowIndex: 2, columnIndex: 6, squareIndex: 2 },
        { value: 8, rowIndex: 2, columnIndex: 7, squareIndex: 2 },
        { value: 0, rowIndex: 2, columnIndex: 8, squareIndex: 2 },
      ],
      [
        { value: 6, rowIndex: 3, columnIndex: 0, squareIndex: 3 },
        { value: 0, rowIndex: 3, columnIndex: 1, squareIndex: 3 },
        { value: 1, rowIndex: 3, columnIndex: 2, squareIndex: 3 },
        { value: 0, rowIndex: 3, columnIndex: 3, squareIndex: 4 },
        { value: 7, rowIndex: 3, columnIndex: 4, squareIndex: 4 },
        { value: 0, rowIndex: 3, columnIndex: 5, squareIndex: 4 },
        { value: 0, rowIndex: 3, columnIndex: 6, squareIndex: 5 },
        { value: 0, rowIndex: 3, columnIndex: 7, squareIndex: 5 },
        { value: 4, rowIndex: 3, columnIndex: 8, squareIndex: 5 },
      ],
      [
        { value: 9, rowIndex: 4, columnIndex: 0, squareIndex: 3 },
        { value: 4, rowIndex: 4, columnIndex: 1, squareIndex: 3 },
        { value: 0, rowIndex: 4, columnIndex: 2, squareIndex: 3 },
        { value: 3, rowIndex: 4, columnIndex: 3, squareIndex: 4 },
        { value: 2, rowIndex: 4, columnIndex: 4, squareIndex: 4 },
        { value: 8, rowIndex: 4, columnIndex: 5, squareIndex: 4 },
        { value: 0, rowIndex: 4, columnIndex: 6, squareIndex: 5 },
        { value: 0, rowIndex: 4, columnIndex: 7, squareIndex: 5 },
        { value: 0, rowIndex: 4, columnIndex: 8, squareIndex: 5 },
      ],
      [
        { value: 7, rowIndex: 5, columnIndex: 0, squareIndex: 3 },
        { value: 0, rowIndex: 5, columnIndex: 1, squareIndex: 3 },
        { value: 3, rowIndex: 5, columnIndex: 2, squareIndex: 3 },
        { value: 4, rowIndex: 5, columnIndex: 3, squareIndex: 4 },
        { value: 1, rowIndex: 5, columnIndex: 4, squareIndex: 4 },
        { value: 0, rowIndex: 5, columnIndex: 5, squareIndex: 4 },
        { value: 8, rowIndex: 5, columnIndex: 6, squareIndex: 5 },
        { value: 5, rowIndex: 5, columnIndex: 7, squareIndex: 5 },
        { value: 0, rowIndex: 5, columnIndex: 8, squareIndex: 5 },
      ],
      [
        { value: 3, rowIndex: 6, columnIndex: 0, squareIndex: 6 },
        { value: 0, rowIndex: 6, columnIndex: 1, squareIndex: 6 },
        { value: 7, rowIndex: 6, columnIndex: 2, squareIndex: 6 },
        { value: 0, rowIndex: 6, columnIndex: 3, squareIndex: 7 },
        { value: 0, rowIndex: 6, columnIndex: 4, squareIndex: 7 },
        { value: 0, rowIndex: 6, columnIndex: 5, squareIndex: 7 },
        { value: 0, rowIndex: 6, columnIndex: 6, squareIndex: 8 },
        { value: 0, rowIndex: 6, columnIndex: 7, squareIndex: 8 },
        { value: 0, rowIndex: 6, columnIndex: 8, squareIndex: 8 },
      ],
      [
        { value: 2, rowIndex: 7, columnIndex: 0, squareIndex: 6 },
        { value: 0, rowIndex: 7, columnIndex: 1, squareIndex: 6 },
        { value: 8, rowIndex: 7, columnIndex: 2, squareIndex: 6 },
        { value: 6, rowIndex: 7, columnIndex: 3, squareIndex: 7 },
        { value: 4, rowIndex: 7, columnIndex: 4, squareIndex: 7 },
        { value: 0, rowIndex: 7, columnIndex: 5, squareIndex: 7 },
        { value: 0, rowIndex: 7, columnIndex: 6, squareIndex: 8 },
        { value: 3, rowIndex: 7, columnIndex: 7, squareIndex: 8 },
        { value: 0, rowIndex: 7, columnIndex: 8, squareIndex: 8 },
      ],
      [
        { value: 5, rowIndex: 8, columnIndex: 0, squareIndex: 6 },
        { value: 0, rowIndex: 8, columnIndex: 1, squareIndex: 6 },
        { value: 4, rowIndex: 8, columnIndex: 2, squareIndex: 6 },
        { value: 2, rowIndex: 8, columnIndex: 3, squareIndex: 7 },
        { value: 0, rowIndex: 8, columnIndex: 4, squareIndex: 7 },
        { value: 3, rowIndex: 8, columnIndex: 5, squareIndex: 7 },
        { value: 6, rowIndex: 8, columnIndex: 6, squareIndex: 8 },
        { value: 0, rowIndex: 8, columnIndex: 7, squareIndex: 8 },
        { value: 0, rowIndex: 8, columnIndex: 8, squareIndex: 8 },
      ],
    ])
  }

  return { tries, sudokuValues, solving, insertValueInCell, checkAndResolveFullSudoku, resetSudoku }
}
