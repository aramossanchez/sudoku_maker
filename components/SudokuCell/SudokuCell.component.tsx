import style from './SudokuCell.module.css';

export function SudokuCellComponent({cell = {value: 0, rowIndex: 0, columnIndex: 0, squareIndex: 0}, onchange = (rowIndex: number, columnIndex: number, squareIndex: number, value: number) => {}}) {
  
  return (
    <div className={`${style.input}`}>
      <input
        min={1}
        max={9}
        maxLength={1}
        type="number"
        className={`
          w-[40px] h-[40px] text-center font-medium focus:outline-0 focus:bg-normalFontColor border-[1px] border-black text-black
          ${cell.rowIndex !== 8 ? 'border-b-0' : ''}
          ${cell.rowIndex === 2 || cell.rowIndex === 5 ? 'border-b-[1px]' : ''}
          ${cell.columnIndex !== 8 ? 'border-r-0' : ''}
          ${cell.columnIndex === 2 ||cell.columnIndex === 5 ? 'border-r-[1px]' : ''}
          ${cell.value === 0 ? 'text-white focus:text-normalFontColor text-[0px]' : 'text-xl'}
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