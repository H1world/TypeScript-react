import * as React from 'react';
// import './App.css';
import '../style/index.scss';
import { Link } from 'react-router-dom';

class App extends React.Component{
  constructor(props: any) {
    super(props);
  };
  public componentDidMount() {
    // console.log();
  }
  public render() {
    console.log(this.props);
    // const demo: any = this.props.match;
    return (
      <div className="App">
        <ul>
          <li><Link to="/">App</Link></li>
          <li><Link to="/About">About</Link></li>
        </ul>
        <header className="App-header">
          <h1 className="App-title">12</h1>
        </header>
        <div className="Dome">
          什么？
        </div>
        {/* <Switch>
          <Route path={`${match.url}/2`} component={Dashboard6} />
          <Route path={`${match.url}/3`} component={Dashboard1} />
          <Route path="/2" component={Dashboard1} />
        </Switch> */}
      </div>
    );
  }
}

export default App;
