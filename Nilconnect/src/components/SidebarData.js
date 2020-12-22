import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from "react-icons/md";


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Chat',
    path: '/Chat',
    icon: <MdIcons.MdChat />,
    cName: 'nav-text'
  },
  {
    title: 'Video',
    path: '/Video',
    icon: <AiIcons.AiFillVideoCamera />,
    cName: 'nav-text'
  },
  
  {
    title: 'Payment',
    path: '/Payment',
    icon: <MdIcons.MdPayment />,
    cName: 'nav-text'
  }
];
