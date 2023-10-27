import { LoaderComponent } from '@/components/Loader/Loader.component';
import { UseSudokuSolver } from './SudokuSolver.hook';
import { SudokuCellComponent } from '@/components/SudokuCell/SudokuCell.component';
import style from './SudokuSolver.module.css';
import { ButtonComponent } from '@/components/Button/Button.component';
import { Fira_Sans } from 'next/font/google';

const Pacif = Fira_Sans({
  weight: ['400', '500', '600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export function SudokuSolver3Container() {

  const { sudokuValues, solving, insertValueInCell, checkAndResolveFullSudoku, resetSudoku } = UseSudokuSolver();

  return (
    <section className={`${Pacif.className} h-[93vh] w-full flex flex-col items-center justify-center gap-8`}>
      <span className='text-5xl font-bold text-primaryColor4'>SUDOKU SOLVER</span>
      <article className={`
        flex flex-col relative border-[4px] border-primaryColor1 rounded-lg
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
                  <SudokuCellComponent cell={cell} onchange={insertValueInCell} key={`${cell.rowIndex} - ${cell.columnIndex}`} />
                )
              })}
            </div>
          )
        })}
      </article>
      <div className='flex flex-row gap-6 items-center'>
        <ButtonComponent
          text='RESOLVE'
          onclick={() => { checkAndResolveFullSudoku(sudokuValues) }}
        />
        <ButtonComponent
          text='RESET'
          onclick={() => { resetSudoku() }}
        />
      </div>
    </section>
  )
}