import React, { useCallback } from 'react';

import { Layout, Menu } from 'antd';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import { SIDER_MENUS, Menu as MenuItem } from '../../routes';

import './style.css';

const { Sider } = Layout;
const { SubMenu } = Menu;

export type ISiderProps = {
  isCollapsed: boolean;
};

function ISider(props: ISiderProps) {
  const match = useRouteMatch();
  const location = useLocation();

  const renderMenu = useCallback((menus: MenuItem[]) => {
    return menus.map((menu: MenuItem) => {
      return menu.children && menu.children.length ? (
        <SubMenu
          key={menu.key}
          title={
            <span>
              {/* {menu.icon && <Icon type={menu.icon} />} */}
              <span>{menu.title}</span>
            </span>
          }
        >
          {renderMenu(menu.children)}
        </SubMenu>
      ) : (
        <Menu.Item key={menu.key}>
          <Link to={menu.path as string}>
            {/* {menu.icon && <Icon type={menu.icon} />} */}
            {menu.title}
          </Link>
        </Menu.Item>
      );
    });
  }, []);

  return (
    <Sider className={props.isCollapsed ? 'collapse sider' : 'sider'} width={204}>
      <Menu
        mode="inline"
        theme="dark"
        selectedKeys={[location.pathname]}
      >
        {renderMenu(SIDER_MENUS)}
      </Menu>
    </Sider>
  );
}

export default ISider;
