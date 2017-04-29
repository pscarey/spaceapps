/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';

class HomePage extends React.Component {
  static propTypes = {
    
  };

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div style={{height: 50}}/>
        <h1 style={{width: '100%', textAlign: 'center', fontWeight:400}}>Whats for dinner?</h1>
        <ul>
        </ul>
        <p>
          <br /><br />
        </p>
      </div>
    );
  }

}

export default HomePage;
