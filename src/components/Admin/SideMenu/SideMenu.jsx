import React from 'react'
import './SideMenu.scss'
import { Menu, Icon } from 'semantic-ui-react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../../hooks/main'

export function SideMenu(props) {
  const { children } = props
  const { pathname } = useLocation()
  return (
    <div className="side-menu-admin">
      <MenuLeft pathname={pathname} />
      <div className="content">{children}</div>
    </div>
  )
}

function MenuLeft(props) {
  const { pathname } = props
  const { auth } = useAuth()
  return (
    <Menu fixed="left" borderless className="side" vertical>
      <Menu.Item as={Link} to={'/admin'} active={pathname === '/admin'}>
        <Icon name="pencil" />
        Orders
      </Menu.Item>

      <Menu.Item
        as={Link}
        to={'/admin/tables'}
        active={pathname === '/admin/tables'}
      >
        <Icon name="table" />
        tables
      </Menu.Item>

      <Menu.Item
        as={Link}
        to={'/admin/payments-history'}
        active={pathname === '/admin/payments-history'}
      >
        <Icon name="history" />
        Payments History
      </Menu.Item>

      <Menu.Item
        as={Link}
        to={'/admin/categories'}
        active={pathname === '/admin/categories'}
      >
        <Icon name="folder" />
        Categories
      </Menu.Item>

      <Menu.Item
        as={Link}
        to={'/admin/products'}
        active={pathname === '/admin/products'}
      >
        <Icon name="cart" />
        Products
      </Menu.Item>

      {/* if user is staff ... render user link in SideMenu */}
      {auth.me?.is_staff && (
        <Menu.Item
          as={Link}
          to={'/admin/users'}
          active={pathname === '/admin/users'}
        >
          <Icon name="users" />
          Users
        </Menu.Item>
      )}
    </Menu>
  )
}
