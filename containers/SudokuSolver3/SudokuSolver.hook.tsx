import { useState } from "react";
import { check8NumbersInZone, checkAndResolveRow, checkAndResolveSquare, checkPosibleNumbersInCell, checkSquare, convertSquareSudokuInNormalSudoku, convertSudokuOfRowsInSudokuOfColumns, convertSudokuOfRowsInSudokuOfSquares, obtainSudokuSquares, writeNumberAutomatically } from "./Services/Operations.service";
import { sudoku_muyfacil_01 } from '../../data/sudokus/sudoku_muyfacil_01';
import { sudoku_normal_01 } from '../../data/sudokus/sudoku_normal_01';

export function UseSudokuSolver() {

  const [sudokuValues, setSudokuValues] = useState(sudoku_normal_01);
  const [solving, setSolving] = useState(false);

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
    copyOfSudokuValue.forEach((row, index) => {
      copyOfSudokuValue[index] = check8NumbersInZone(row);
    });

    //SABER SI LAS COLUMNAS TIENEN SOLO UN NÚMERO POR RELLENAR, Y RELLENARLO
    const columnsOfSudoku = convertSudokuOfRowsInSudokuOfColumns(copyOfSudokuValue);

    columnsOfSudoku.forEach((column, index) => {
      columnsOfSudoku[index] = check8NumbersInZone(column);
    })

    columnsOfSudoku.forEach(column => {
      column.forEach(cell => {
        copyOfSudokuValue[cell.rowIndex][cell.columnIndex] = cell;
      });
    });

    //SABER SI LAS CUADRÍCULAS TIENEN SOLO UN NÚMERO POR RELLENAR, Y RELLENARLO
    const squaresOfSudoku = convertSudokuOfRowsInSudokuOfSquares(copyOfSudokuValue);

    squaresOfSudoku.forEach((column, index) => {
      squaresOfSudoku[index] = check8NumbersInZone(column);
    })

    squaresOfSudoku.forEach(column => {
      column.forEach(cell => {
        copyOfSudokuValue[cell.rowIndex][cell.columnIndex] = cell;
      });
    });

    // //SABER QUÉ NÚMEROS SE PUEDEN PONER EN CADA CELDA, REVISANDO CON FILAS Y COLUMNAS. SI SOLO SE PUEDE PONER UNO, RELLENARLO.
    const sudokuInOnlyArray = copyOfSudokuValue.reduce((acc, curr) => {
      return acc.concat(curr);
    }, []);

    const cellsWithMultiplesValues: { value: number, rowIndex: number, columnIndex: number, squareIndex: number }[] = [];

    sudokuInOnlyArray.forEach(cellInArray => {
      if (cellInArray.value === 0) {
        const posibleValuesInCell: number[] = checkPosibleNumbersInCell(cellInArray, copyOfSudokuValue);
        if (posibleValuesInCell.length === 1) {
          copyOfSudokuValue[cellInArray.rowIndex][cellInArray.columnIndex].value = posibleValuesInCell[0];
        } else {
          cellsWithMultiplesValues.push(cellInArray);
        }
      }
    });

    // REVISAR NÚMEROS DISPONIBLES EN CADA CELDA DE CADA SQUARE. SI DENTRO DE UNA SQUARE HAY ALGÚN NÚMERO DE LOS POSIBLES POR CADA CELDA QUE SOLO SE PUEDE PONER EN UNA CELDA, SE RELLENA LA CELDA CON ESE VALOR.

    // AQUÍ VOY A GUARDAR TODAS LAS CELDAS DE LA SQUARE
    let cellsWithPosibleValuesInSquares: { values: number[], rowIndex: number, columnIndex: number, squareIndex: number }[] = [];

    // RECORRO TODOS LOS SQUARES
    for (let i = 0; i < [0, 1, 2, 3, 4, 5, 6, 7, 8].length; i++) {
      //
      const posibleValuesInSquares = cellsWithMultiplesValues.filter((cellInArray) => cellInArray.squareIndex === [1, 2, 3, 4, 5, 6, 7, 8][i]);
      posibleValuesInSquares.forEach(cellInArray => {
        const posibleValuesInCell: number[] = checkPosibleNumbersInCell(cellInArray, copyOfSudokuValue);
        cellsWithPosibleValuesInSquares.push({ values: posibleValuesInCell, rowIndex: cellInArray.rowIndex, columnIndex: cellInArray.columnIndex, squareIndex: cellInArray.squareIndex });
      });

      let countOfNumbers: { [key: number]: number } = {};

      cellsWithPosibleValuesInSquares.forEach(item => {
        item.values.forEach(number => {
          countOfNumbers[number] = (countOfNumbers[number] || 0) + 1;
        });
      });

      console.log('posible numbers in square ', [1, 2, 3, 4, 5, 6, 7, 8][i], ' --> ', countOfNumbers);
      
      const posibleNumbersInSquare: string[] = Object.keys(countOfNumbers);

      posibleNumbersInSquare.forEach(item => {
        if (countOfNumbers[+item] === 1) {
          const cellToBeChanged = cellsWithPosibleValuesInSquares.find((cellInArray) => cellInArray.values.includes(+item));
          if (cellToBeChanged) {
            copyOfSudokuValue[cellToBeChanged.rowIndex][cellToBeChanged.columnIndex].value = +item;
          }
        }
      });

      countOfNumbers = {};
      cellsWithPosibleValuesInSquares = [];

    }

    setSudokuValues(copyOfSudokuValue);
    setSolving(false);
  }

  const resetSudoku = () => {
    setSudokuValues(sudoku_normal_01)
  }

  return { sudokuValues, solving, insertValueInCell, checkAndResolveFullSudoku, resetSudoku }
}
