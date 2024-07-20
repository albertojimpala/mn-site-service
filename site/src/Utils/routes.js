import React from 'react';
import {
  HomeOutlined,
  HddOutlined,
  TeamOutlined,
  ProfileOutlined,
  UserOutlined,
} from '@ant-design/icons';

export const Routes = [
  {
    title: 'Home',
    slug: 'home',
    path: '/',
    icon: <HomeOutlined />,
    roles: ['admin', 'Dev'],
    childs: [],
    optionalIcon: true,
  },
  {
    title: 'Usuarios',
    slug: 'users',
    path: '/users',
    icon: <TeamOutlined className="anticon" />,
    roles: ['admin', 'Dev'],
    childs: [],
    optionalIcon: true,
  },
  {
    title: 'Empleados',
    slug: 'employees',
    path: '/employees',
    icon: <UserOutlined />,
    roles: ['admin', 'Dev', 'level_1'],
    childs: [],
    optionalIcon: true,
  },

  {
    title: 'Catalogos',
    slug: 'catalogs',
    path: '',
    icon: <ProfileOutlined />,
    roles: ['admin', 'Dev'],
    childs: [
      {
        title: 'Equipos',
        slug: 'machines',
        path: '/machines',
        icon: <HddOutlined />,
        roles: ['admin', 'Dev', 'level_1'],
        childs: [],
        optionalIcon: true,
      },
      {
        title: 'Lugares',
        slug: 'places',
        path: '/places',
        icon: <HddOutlined />,
        roles: ['admin', 'Dev', 'level_1'],
        childs: [],
        optionalIcon: true,
      },
    ],
    optionalIcon: true,
  },
];
