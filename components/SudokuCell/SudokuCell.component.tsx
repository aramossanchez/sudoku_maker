import style from './SudokuCell.module.css';
import { Dosis } from 'next/font/google';

const Pacif = Dosis({
  weight: ['400', '500', '600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export function SudokuCellComponent({cell = {value: 0, rowIndex: 0, columnIndex: 0, squareIndex: 0}, onchange = (rowIndex: number, columnIndex: number, squareIndex: number, value: number) => {}}) {
  
  return (
    <div className={`${style.input}`}>
      <input
        min={1}
        max={9}
        maxLength={1}
        type="number"
        className={`
          ${Pacif.className}
          bg-primaryColor2 w-[40px] h-[40px] text-center focus:outline-0 focus:bg-primaryColor4 border-[1px] border-primaryColor1 text-normalFontColor font-semibold
          ${cell.rowIndex !== 8 ? 'border-b-0' : ''}
          ${cell.rowIndex === 2 || cell.rowIndex === 5 ? 'border-b-[1px]' : ''}
          ${cell.columnIndex !== 8 ? 'border-r-0' : ''}
          ${cell.columnIndex === 2 ||cell.columnIndex === 5 ? 'border-r-[1px]' : ''}
          ${cell.value === 0 ? 'text-primaryColor2 focus:text-normalFontColor text-[0px]' : 'text-2xl'}
        `}
        value={cell.value}
        onChange={(e) => {
          // QUITAR TODOS LOS CEROS DEL INPUT
          e.target.value = e.target.value.replace(/0/g, "");
          onchange(cell.rowIndex, cell.columnIndex, cell.squareIndex, +e.target.value % 10)
        }}
      />
    </div>
  )
}