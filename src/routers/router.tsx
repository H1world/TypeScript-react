import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// 路由配置页
// 关于页面
// import About from 'bundle-loader?lazy&name=about!../page/about/about'     
import About from '../page/about/about'     
import App from '../page/App'

class AppRouter extends React.Component {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" component={App} />
          <Route path="/About" component={About} /> 
        </Switch>
      </Router>
    )
  }
}
export default AppRouter;