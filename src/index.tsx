import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style/index.css';
import './JS/rem';
import AppRouter from './routers/router';
import { Provider } from 'mobx-react';
import AppState from './Mobx/AppState';
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
  <Provider {...AppState}>
    <AppRouter />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
