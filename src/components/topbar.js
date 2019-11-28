import React, { Component } from 'react';
import Social from './social-icons';
import { FaEnvelope } from 'react-icons/fa';
import styled from 'styled-components';

class Topbar extends Component {
	render() {
		return (
			<TopBarWrapper>
				<div class='one'>
					<a href='/contactus/index.html' className='text-light'>
						CONTACT
					</a>
					<h6 className='text-light tbl tbr'>QUESTIONS? &emsp;609 608 0429 X 102</h6>
				</div>
				<div className='two'>
					<h6 className='text-light'>
						<FaEnvelope className='social mr-1' />info@synectiks.com
					</h6>
					<div className='cursor'>
						{Social.map((item, index) => {
							return (
								<a key={index} href={item.url} target='_blank' rel='noopener noreferrer' className=''>
									{item.icon}
								</a>
							);
						})}
					</div>
				</div>
			</TopBarWrapper>
		);
	}
}

export default Topbar;

const TopBarWrapper = styled.div`
	display: grid;
	grid-template-columns: auto;
	grid-gap: 5px;
	padding: 5px 0 0 0;
	.one,
	.two {
		display: flex;
		justify-content: space-around;
		-webkit-text-fill-color: white;
	}
	/* .one > a {
		-webkit-text-fill-color: white;
	} */
	a,
	h6 {
		font-size: 12px;
	}
	.cursor {
		display: flex;
		justify-content: start;
		/* cursor: pointer; */
	}
	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 5px 0;
	}
	@media (min-width: 992px) {
		width: 60vw;
		margin-left: auto;
		padding: 0;
	}
	@media (min-width: 1024px) {
		width: 50vw;
		margin-left: auto;
		margin-right: 7%;
		.one,
		.two {
			display: inline-flex;
			-webkit-text-fill-color: white;
		}
		a,
		h6 {
			font-size: 0.9rem;
			border-right: 1px solid white;
			padding-top: 3px;
			padding-bottom: 4px;
			padding-left: 11px;
			padding-right: 11px;
			margin-bottom: 0px;
		}
	}
`;
