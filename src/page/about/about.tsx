import * as React from 'react';
import {  Route, Link } from 'react-router-dom';

import '../../style/index.scss';
import Abouteded from './abouts';
import Aboutededed from './aboutereee';

class About extends React.Component {
  public render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/">测试1</Link></li>
          <li><Link to="/About">测试2</Link></li>
          <li><Link to="/about/aboutd">Abouted</Link></li>
          <li><Link to="/about/dd">测试哈哈</Link></li>
        </ul>
        <Route path="/about/dd" component={Aboutededed} />
        <Route path="/about/aboutd" component={Abouteded} />
        </div>
    );
  }
}

export default About;
