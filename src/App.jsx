// import { useState } from 'react'
// function App() {
//   const [count, setCount] = useState(0)
//   return (
//     <>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div>
//     </>
//   )
// }
// export default App

import { Footer } from "./Components/Footer/Footer.jsx"
import { Header } from "./Components/Header/Header.jsx"

export const App = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  )
}
