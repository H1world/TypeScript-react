import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './page/App';
// import About from './page/about/about'; 
import './style/index.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppRouter from './routers/router';
// import AppState from './Mobx/AppState';
import registerServiceWorker from './registerServiceWorker';

// export default class Hello extends React.Component {
//   public render() {
//     return (
//       <Router>
//         <div>
//           <ul>
//             <li><Link to="/">App</Link></li>
//             <li><Link to="/About">About</Link></li>
//           </ul>
//           <hr />
//           <Route exact = {true} path="/" component={App} />
//           <Route path="/About" component={About} />
//         </div>
//       </Router>
//     )
//   }
// }

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
