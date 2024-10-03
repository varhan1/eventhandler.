class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
  
    handleIncrement = () => {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    }
  
    handleDecrement = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }
  
    render() {
      return (
        <div>
        <h2> {this.state.count}</h2>
          <button onClick={this.handleIncrement}>-1</button>
          <button onClick={this.handleDecrement}>+1</button>
        </div>
      );
    }
  }
  
// export default Counter;
  const myElement = <Counter />;
  const myApp = myElement;
  ReactDOM.createRoot(document.getElementById('root')).render(myApp);