import React from 'react';

import { useHistory, useParams, useRouteMatch, withRouter } from 'react-router-dom';

import Tabs from '../../components/Tabs';

function Page2(props: any) {
  const history = useHistory();
  const { tabId } = useParams<{ tabId: string }>();
  const match = useRouteMatch();

  const onTabClick = (key: string) => {
    history.push(`/page2/${key}`);
  }

  return (
    <>
      <div>page2</div>
      <Tabs activeKey={tabId} onTabClick={onTabClick} />
    </>
  )
}

export default withRouter(Page2);
