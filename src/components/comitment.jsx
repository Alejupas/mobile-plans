  
import React, { Component } from 'react';
import CustomRadio from './common/customRadio';

class Comitment extends Component {
  render() {
    return (
      <div className="commitment-component">
        <div className="c__selection">
          <CustomRadio
            value="commit"
            checked={!this.props.noCommitment}
            onClick={this.props.handleRadio}
          >
            24 men.
          </CustomRadio>
        </div>
        <div className="c__selection">
          <span className="c__select">
            <CustomRadio
              value="noCommit"
              checked={this.props.noCommitment}
              onClick={this.props.handleRadio}
            >
              Be isipareigojimu
            </CustomRadio>
          </span>
        </div>
      </div>
    );
  }
}

export default Comitment;