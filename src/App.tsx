import { useEffect, useState } from 'react'
import { useCallback } from 'react';
import * as dbTools from './db/db';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Create tables
  const loadData = useCallback(async () => {
    try {
      const db = await dbTools.connectToDatabase()
      await dbTools.createTables(db)
    } catch (error) {
      console.error(error)
    }
  }, [])
  
  useEffect(() => {
    loadData()
  }, [loadData])

  const tableNames = useCallback(async () => {
    try {
      const db = await dbTools.connectToDatabase()
      await dbTools.getTableNames(db)
    } catch (error) {
      console.error(error)
    }
  }, [])
  
  useEffect(() => {
    return(
      console.log(tableNames)
    )
  })

  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
