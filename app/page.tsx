"use client"

// import { SudokuSolverContainer } from '@/containers/SudokuSolver/SudokuSolver.container'
// import { SudokuSolver2Container } from '@/containers/SudokuSolver2/SudokuSolver.container'
import { MenuTopContainer } from '@/containers/MenuTop/MenuTop.container'
import { SudokuSolver3Container } from '@/containers/SudokuSolver3/SudokuSolver.container'

export default function Index() {
  return (
    <main className='w-[100vw] h-[100vh]'>
      <MenuTopContainer />
      <SudokuSolver3Container />
    </main>
  )
}
