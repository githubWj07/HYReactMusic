import React from 'react';

import {headerLinks} from '@/common/local-data.js';

import {NavLink} from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import {
	HeaderWrapper,
	HeaderLeft,
	HeaderRight
} from './style.js';

export default function MusicAppHeader(){
	const showNavList = (item,index)=>{
		if(index < 3){
			return (
				<NavLink to={item.link} exact>
					{item.title}
					<i className="cur sprite_01"></i>
				</NavLink>
			)
		}else {
			return <a href={item.link}>{item.title}</a>
		}
	}
	return(
		<HeaderWrapper>
			<div className="content wrapper-v1">
				<HeaderLeft>
					<a href="#/" className="logo sprite_01"></a>
					<div className="nav-list">
						{
							headerLinks.map((item,index) => {
								return <div key={index} className="nav-item">{showNavList(item,index)}</div>
							})
						}
					</div>
				</HeaderLeft>
				<HeaderRight>
					<Input placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} className="search-inp" />
					<a className="creator-btn">创作者中心</a>
					<a className="login-btn">登录</a>
				</HeaderRight>
			</div>
			<div className="divider"></div>
		</HeaderWrapper>
	)
}