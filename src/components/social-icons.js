import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import styled from 'styled-components';

export default [
	{
		icon: <FaFacebookF className='social fb' />,
		url: 'https://www.facebook.com/synectikscloud/'
	},
	{
		icon: <FaTwitter className='social tw' />,
		url: 'https://twitter.com/synectiks'
	},
	{
		icon: <FaLinkedinIn className='social lnk' />,
		url: 'https://www.linkedin.com/company/synectiks/'
	}
];
