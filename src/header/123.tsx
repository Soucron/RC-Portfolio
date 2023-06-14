// import style from './nav/Nav.module.css';
// import {close, menu} from '../assets';
// import React from 'react';
//
// <ul className={style.nav}>
//     {navLinks.map((link) => {
//         <li key={link.id}
//             className={`${
//                 active === link.title ? "text-white" : "text-second"} hover: text-white text-[18px] font-medium cursor-pointer`}
//
//         </li>
//     })}
//     <a  href="">Main</a>
//     <a  href="">My skills</a>
//     <a  href="">My projects</a>
//     <a  href="">Contacts</a>
// </ul>
//
// <div className={'sm: hidden' flex flex-1 jusify-end items-center}>
//     <img src={ toogle ? close : menu} alt={'menu'} className='w-[28px]' h-[28px] object-contain cursor-pointer
//     onClick={() => setToggle(!toggle)}/>
// </div>
//
// <div className={!toogle ? 'hidden' : flex   p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w 140px z-10 rounded-xl}>
//     <ul className={style.nav} list-none flex justify-end items-start flex-col gap-4 >
//         {navLinks.map((link) => {
//             <li key={link.id}
//                 className={`${
//                     active === link.title ? "text-white" : "text-second"} font-poppins font-medium cursor-pointer text-[16px]  }
//                             onClick={() =>
//                              setToogle(!toggle)
//                              setActive(link.title)}>
//                         <a href={`#${link.id}`}>{link.title}</a>
//                     </li>
//                 })}
//                 <a  href="">Main</a>
//                 <a  href="">My skills</a>
//                 <a  href="">My projects</a>
//                 <a  href="">Contacts</a>
//             </ul>
//         </div>
//
//     );
// };