import * as React from 'react';
import '../../style/index.scss';

export interface Idjagjakl {
  match: any;
  staticContext: string;
}

class Abouteded extends React.Component<Idjagjakl, any> {
  constructor(props: Idjagjakl) {
    super(props);
  };
  public render() {
    console.log(this.props.staticContext)
    return (
      <div className="App">
        <div className="Dome">
          测试页面22222222
        </div>
      </div>
    );
  }
}

export default Abouteded;
