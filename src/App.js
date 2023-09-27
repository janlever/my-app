import "./App.css"
import Hello from "./components/Hello"
import Maths from "./components/Maths"
import Jan from "./components/Jan"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Jan />
        <Maths />
        <Maths />
        <Maths />
      </header>
    </div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Maths />
//         {/* <Hello name="jan" />
//         <Hello
//           name="torbik"
//           age={20}
//         /> */}
//       </header>
//     </div>
//   )
// }

export default App
