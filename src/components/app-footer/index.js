import React from 'react';

import {
	FooterWrapper,
	FooterLeft,
	FooterRight
} from './style.js'
export default function MusicAppFooter(){
	return(
		<FooterWrapper>
			<div className="content">
				<FooterLeft>
					<div>
						<span>网易公司版权所有©1997-2021</span>
						<span>杭州乐读科技有限公司运营：</span>
						<a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png">浙网文[2018]3506-263号</a>
					</div>
					<div>
						<span>违法和不良信息举报电话：0571-89853516</span>
						<span>举报邮箱：</span>
						<a href="mailto:ncm5990@163.com">ncm5990@163.com</a>
					</div>
					<div>
						<span>粤B2-20090191-18</span>
						<a href="https://beian.miit.gov.cn/#/Integrated/index">工业和信息化部备案管理系统网站</a>
						<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564">浙公网安备 33010902002564号</a>
					</div>
				</FooterLeft>
				<FooterRight>
				
				</FooterRight>
			</div>
		</FooterWrapper>
	)
}