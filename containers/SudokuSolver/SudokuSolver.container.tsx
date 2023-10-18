import { LoaderComponent } from '@/components/Loader/Loader.component';
import { UseSudokuSolver } from './SudokuSolver.hook';
import { SudokuCellComponent } from '@/components/SudokuCell/SudokuCell.component';
import style from './SudokuSolver.module.css';

export function SudokuSolverContainer() {

  const { sudokuValues, solving, insertValueInCell, checkAndResolveFullSudoku, resetSudoku } = UseSudokuSolver();

  return (
    <section className='h-[93vh] w-full flex flex-col items-center justify-center gap-8'>
      <span className='text-5xl font-medium text-titleFontColor'>Sudoku Solver</span>
      <article className={`
        flex flex-col relative
        ${style.sudoku_container}
      `}>
        {/* LOADER */}
        <div className={`${solving ? 'block' : 'hidden'} ${style.loader} absolute opacity-100`}>
          <LoaderComponent />
        </div>
        {sudokuValues.map((row, indexRow) => {
          return (
            <div
              className={`
                flex flex-row            
                ${solving ? 'opacity-10' : ''}
              `}
              key={indexRow}
            >
              {row.map((cell, indexCell) => {
                return (
                  <SudokuCellComponent value={cell} onchange={insertValueInCell} indexRow={indexRow} indexCell={indexCell} key={`${indexRow} - ${indexCell}`} />
                )
              })}
            </div>
          )
        })}
      </article>
      <div className='flex flex-row gap-3 items-center'>
        <button
          className='px-4 py-1 border-[1px] border-backgroundColor text-backgroundColor font-medium rounded-lg ease-in-out duration-200 hover:opacity-80 bg-gradient-to-r from-primaryColor1 to-primaryColor2'
          onClick={() => { checkAndResolveFullSudoku(sudokuValues) }}
        >
          Resolve
        </button>
        <button
          className='px-4 py-1 border-[1px] border-primaryColor2 text-titleFontColor font-medium bg-backgroundColor rounded-lg ease-in-out duration-200 hover:opacity-80'
          onClick={() => { resetSudoku() }}
        >
          Reset
        </button>
      </div>
    </section>
  )
}