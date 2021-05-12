import React from 'react';

import { useHistory, useParams, useRouteMatch } from 'react-router-dom';

import Tabs from '../../components/Tabs';

function Page2() {
  let history = useHistory();
  const { tabId } = useParams<{ tabId: string }>();
  let match = useRouteMatch("/page2/:tabId");

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

export default Page2;
