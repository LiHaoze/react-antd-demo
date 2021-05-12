import React from 'react';

import { withRouter } from 'react-router-dom';

import Tabs from '../../components/Tabs';

function Page1(props: any) {
  // console.log('props', props);
  return (
    <>
      <div>page1</div>
      {/* <Tabs /> */}
    </>
  )
}

export default withRouter(Page1);
