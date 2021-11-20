// 此文件将会在服务端/客户端都将会用到
import React from 'react';
import { LayoutProps } from 'ssr-types-react';
import './common.less';

export default (props: LayoutProps) => props.children;
