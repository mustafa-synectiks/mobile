import React from 'react';
import Social from './social-icons';
import { FaEnvelope } from 'react-icons/fa';

const Topbar = () => {
	return (
		<div className=''>
			<a href='/contactus/index.html' className='ml-4 ms-ml-0 topCont'>
				CONTACT
			</a>
			<small className='topFont py-2 px-4 ml-4  py-md-2 px-md-4 ml-md-4 tbl tbr'>
				<strong>QUESTIONS? &emsp; 609 608 0429 X 102</strong>
			</small>
			<span className='tbr py-2 px-4 mx-4 mx-md-0 pr-4 pr-md-4 py-md-2 mr-md-4'>
				<FaEnvelope className='social mr-1' />
				<small className='text-white topFont'>
					<strong>info@synectiks.com</strong>
				</small>
			</span>
			{Social.map((item, index) => {
				return (
					<a key={index} href={item.url} target='_blank' rel='noopener noreferrer' className='mx-1'>
						{item.icon}
					</a>
				);
			})}
		</div>
	);
};

export default Topbar;

// import React from "react"
// import Social from "./social-icons"
// import { FaEnvelope } from "react-icons/fa"

// const Topbar = () => {
//   return (
//     <div>
//       <ul className="topbarList">
//         <li className="py-1">
//           <a href="/contactus/index.html" className="topCont">
//             CONTACT
//           </a>
//         </li>
//         <li className="text-white topFont tbl tbr mx-4 px-4 py-1">
//           <strong>QUESTIONS? &emsp; 609 608 0429 X 102</strong>
//         </li>
//         <li className="tbr pr-4 py-1 mr-4">
//           <FaEnvelope className="social mr-1" />
//           <span className="text-white topFont">
//             <strong>info@synectiks.com</strong>
//           </span>
//         </li>
//         <li className="py-1">
//           {Social.map((item, index) => {
//             return (
//               <a
//                 key={index}
//                 href={item.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mx-1"
//               >
//                 {item.icon}
//               </a>
//             )
//           })}
//         </li>
//       </ul>
//     </div>
//   )
// }

// export default Topbar
