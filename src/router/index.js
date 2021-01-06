import MusicDiscover from '@/pages/discover/index.js';
import MusicMine from '@/pages/mine/index.js';
import MusicFriend from '@/pages/friend/index.js';

const routes = [
	{
		path:"/",
		exact: true,
		component: MusicDiscover
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