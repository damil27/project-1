import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from './components/Layout'
import Invoices from './components/Invoices'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout >
        <Invoices />
      </Layout>
    </>
  )
}

export default App
