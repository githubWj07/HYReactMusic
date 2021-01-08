import React,{Fragment,memo} from 'react';
import {renderRoutes} from 'react-router-config';
import {NavLink} from 'react-router-dom';

import {
	DiscoverWrapper,
	TopMenu
} from './style.js'
import {discoverMenu} from '@/common/local-data.js'

export default memo(function MusicDiscover(props){
	const {route} = props;
	return(
		<DiscoverWrapper>
			<div className="top-wrap">
				<TopMenu className="wrapper-v2">
					{
						discoverMenu.map((item,index) => {
							return (
								<Fragment key={item.title}>
									<NavLink to={item.link}>
										{item.title}
									</NavLink>
								</Fragment>
							)
						})
					}
				</TopMenu>
			</div>
			{renderRoutes(route.routes)}
		</DiscoverWrapper>
	)
})