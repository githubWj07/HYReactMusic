import styled from "styled-components";

export const FooterWrapper = styled.div`
	background: #f2f2f2;
	height: 172px;
	padding-top: 12px;
	font-size: 12px;
	a{
		color: #999;
	}
	a:hover{
		text-decoration:underline;
	}
	.content {
		display: flex;
		justify-content: space-between;
	}
	
`
export const FooterLeft = styled.div`
	width: 520px;
	line-height: 24px;
	.link-line {
		color: #999;
		padding: 0 10px;
	}
	
`
export const FooterRight = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 420px;
	color: #999;
	.unit {
		width: 60px;
		height: 70px;
		text-align:center;
		line-height: 16px;
		white-space: nowrap;
	}
	.unit-sprite {
		display: inline-block;
		width: 50px;
		height: 45px;
	}
	.logo-amped{
		background-position:-63px -456.5px;
	}
	.logo-auth{
		background-position:-63px -101px;
	}
	.logo-musician{
		background-position:0 0;
	}
	.logo-reward{
		background-position:-60px -50px;
	}
	.logo-cash{
		background-position:0 -101px;
	}
	.amped-txt {
		margin-left: -10px;
	}
`