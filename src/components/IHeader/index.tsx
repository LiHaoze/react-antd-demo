import React, { useCallback } from 'react';

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

import './style.css';

const { Header } = Layout;

export interface IHeaderProps {
  isCollapsed: boolean;
  toggleCollapse: Function;
}

export default function IHeader(props: IHeaderProps) {
  const handleToggleCollapse = useCallback(() => props.toggleCollapse(!props.isCollapsed), [props.isCollapsed]);

  return (
    <Header className="nav-header site-layout-background">
      <div className="nav-left">
        {
          props.isCollapsed
            ? <MenuFoldOutlined onClick={handleToggleCollapse} />
            : <MenuUnfoldOutlined onClick={handleToggleCollapse} />
        }

        <span className="nav-title">react antd demo</span>
      </div>
      <div className="nav-right"></div>
    </Header>
  )
};
