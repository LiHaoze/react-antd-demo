import React from 'react';

import { Tabs } from 'antd';
import { } from 'react-router';

const { TabPane } = Tabs;

export interface MyTabsProps {
  activeKey: string;
  onTabClick: (key: string) => void;
}

export default function MyTabs(props: MyTabsProps) {
  return (
    <Tabs defaultActiveKey="1" activeKey={props.activeKey} onTabClick={props.onTabClick}>
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  )
}