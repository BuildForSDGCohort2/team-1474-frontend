import React from 'react';
import Header from '../Partials/Header';
import flow from '../Assets/Images/flow.svg';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className="container mw-100">
          <Header />
          <div className="row d-flex h-100">
            <div className="intro-text pl-4 col-md-6 col-sm-12 d-flex">
              <div className="mx-3 pt-2 text-container" style={{ height: '400px' }}>
                <h1 className="title">
                  {'Let\'s feed the world together'}
                  <span className="arrow-text">You</span>
                </h1>
                <h2 className="subtitle">
                  Invest in the agriculture value chain
                  <br />
                  And get some money from it.
                  <br />
                  No matter who you are
                </h2>
                <button type="button" className="btn get-started-btn px-3">See how it works</button>
              </div>
            </div>
            <div className="col-md-6 demo d-flex justify-content-center">
              <img src={flow} alt="flow" className="flow-image" />
            </div>
          </div>

        </div>
        <div style={{ height: '400px', width: '500px' }} />
      </div>
    );
  }
}
