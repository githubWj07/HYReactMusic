import styled from 'styled-components';

export const DiscoverWrapper = styled.div`
	.top-wrap {
		background-color: #c20c0c;
		height: 34px;
		display: flex;
		align-items: center;
		position: relative;
		top: -5px;
	}
`

export const TopMenu = styled.div`
	padding-left: 140px;
	a {
		display: inline-block;
		color: #fff;
		font-size: 12px;
		padding: 4px 13px;
		margin-right: 28px;
	}
	a:hover {
		background-color: #9B0909;
		border-radius: 10px;
	}
	a.active {
		background-color: #9B0909;
		border-radius: 10px;
	}
`