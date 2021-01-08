import React,{memo} from 'react';

import {headerLinks} from '@/common/local-data.js';

import {NavLink} from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import {
	HeaderWrapper,
	HeaderLeft,
	HeaderRight
} from './style.js';

export default memo(function MusicAppHeader(){
	const showNavList = (item,index)=>{
		if(index < 3){
			return (
				<NavLink to={item.link}>
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
					<a href="/discover" className="logo sprite_01"> </a>
					<div className="nav-list">
						{
							headerLinks.map((item,index) => {
								return <div key={item} className="nav-item">{showNavList(item,index)}</div>
							})
						}
					</div>
				</HeaderLeft>
				<HeaderRight>
					<Input placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} className="search-inp" />
					<a href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter" className="creator-btn">创作者中心</a>
					<a href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter" className="login-btn">登录</a>
				</HeaderRight>
			</div>
			<div className="divider"></div>
		</HeaderWrapper>
	)
})