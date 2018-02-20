const React = require('react');

// module.exports = function() {
//   return (
//     <div>
//       <div>Heys from server</div>
//       <button onClick={() => alert('qwe')}>Click me</button>
//     </div>
//   )
// };

module.exports = class extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }
  componentDidMount() {
    console.log('mounted');
    setInterval(() => {
      console.log('setting...')
      this.setState(state => {
        return {
          counter: state.counter + 1
        }
      })
    }, 1000);
  }
  render() {
    return <div>Counters: <span>{this.state.counter}</span></div>
  }
}
