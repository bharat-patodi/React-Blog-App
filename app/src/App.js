import "./App.scss";
import Home from "./components/HomePage";
import R from "react";

class App extends R.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: false,
    };
  }

  logUserIn = () => {
    this.setState({
      isUserLoggedIn: true,
    });
  };

  render() {
    return (
      <div className="App">
        {/* <Loader /> */}
        <Home logger={this.logUserIn} />
      </div>
    );
  }
}

export default App;
