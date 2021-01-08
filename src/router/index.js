import React from 'react';
import { Redirect } from 'react-router-dom';

import MusicDiscover from '@/pages/discover/index.js';
import MusicMine from '@/pages/mine/index.js';
import MusicFriend from '@/pages/friend/index.js';
import MusicRecommend from '@/pages/discover/c-child/recommend/index.js';
import MusicToplist from '@/pages/discover/c-child/toplist/index.js';
import MusicPlaylist from '@/pages/discover/c-child/playlist/index.js';
import MusicDjradio from '@/pages/discover/c-child/djradio/index.js';
import MusicArtist from '@/pages/discover/c-child/artist/index.js';
import MusicAlbum from '@/pages/discover/c-child/album/index.js';

const routes = [
	{
		path:"/",
		exact: true,
		render: () => (
			<Redirect to="/discover" />
		)
	},
	{
		path:"/discover",
		component: MusicDiscover,
		routes: [
			{
				path:"/discover",
				exact: true,
				render: ()=> (
					<Redirect to="/discover/recommend" />
				)
			},
			{
				path:"/discover/recommend",
				component: MusicRecommend
			},
			{
				path:"/discover/toplist",
				component: MusicToplist
			},
			{
				path:"/discover/playlist",
				component: MusicPlaylist
			},
			{
				path:"/discover/djradio",
				component: MusicDjradio
			},
			{
				path:"/discover/artist",
				component: MusicArtist
			},
			{
				path:"/discover/album",
				component: MusicAlbum
			}
		]
	},
	{
		path:"/mine",
		component: MusicMine
	},
	{
		path:"/friend",
		component: MusicFriend
	}
];

export default routes;