import { React, useState } from 'react'

// export class Counter extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       counter: 0
//     }
//     this.handleCLickButton = this.handleCLickButton.bind(this)
//   }

//   handleCLickButton () {
//     this.setState({ counter: this.state.counter + 1 })
//   }

//   render () {
//     return (
//             <button className="btn" onClick={this.handleCLickButton}>Click {this.state.counter}</button>
//     )
//   }
// }

export function Counter () {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }
  return (
        <>
            <button
                className="btn"
                onClick={handleClick}>
                Click {count}
            </button>
        </>
  )
}
