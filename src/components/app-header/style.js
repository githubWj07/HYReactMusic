import styled from "styled-components";

export const HeaderWrapper = styled.div`
	height: 75px;
	background-color: #242424;
	color: #fff;
	a {
		color: #ccc;
	}
	.content {
		height: 70px;
		display: flex;
		justify-content: space-between;
	}
	.divider {
		height: 5px;
		background-color: #c20c0c;
	}
	.nav-list {
		display: flex;
		line-height: 70px;
	}
	a.active .cur {
		display: inline-block;
		width: 12px;
		height: 7px;
		background-position:-226px 0;
		position: absolute;
		left: 50%;
		margin-left: -6px;
		bottom: -1px;
	}
	.nav-item:last-child a {
		position: relative;
		color:#f00;
		::after{
			display: block;
			width: 28px;
			height: 19px;
			content: "";
			position: absolute;
			background-image: url(${require("@/assets/img/topbar.png")});
			background-position: 190px 0;
			top: 20px;
			right: -15px;
		}
	}
`
export const HeaderLeft = styled.div`
	display: flex;
	a {
		display: inline-block;
		padding: 0 20px;
		position:relative;
	}
	a:hover,a.active{
		color: #fff;
		background-color: #000;
	}
	.logo {
		display: inline-block;
		width: 176px;
		height: 69px;
		background-position: 0 0;
		padding: 0;
	}
`
export const HeaderRight = styled.div`
	display: flex;
	font-size: 12px;
	align-items: center;
	.search-inp {
		width: 158px;
		height: 32px;
		border-radius: 16px;
	}
	.ant-input{
		font-size: 12px;
	}
	.creator-btn {
		display: inline-block;
		width: 90px;
		height: 32px;
		line-height: 30px;
		text-align: center;
		color: #ccc;
		border-radius: 16px;
		margin:0 16px 0 12px;
		border: 1px solid #ccc;
		&:hover {
			color: #fff;
			border: 1px solid #fff;
		}
	}
	
`