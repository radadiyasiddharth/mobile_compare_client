
// // import React from "react";
// // import { motion } from "framer-motion";
// // import { BsFillSendFill } from "react-icons/bs";
// // import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaPinterest } from "react-icons/fa";

// // const footerVariants = {
// //   hidden: { opacity: 0, scale: 0.95 },
// //   visible: { 
// //     opacity: 1, 
// //     scale: 1, 
// //     transition: { duration: 0.7, ease: 'easeOut' }
// //   },
// // };

// // const iconVariants = {
// //   hidden: { opacity: 0, rotate: -30 },
// //   visible: { 
// //     opacity: 1, 
// //     rotate: 0, 
// //     transition: { duration: 0.5, ease: 'easeInOut' }
// //   },
// // };

// // function Footer() {
// //   return (
// //     <motion.div 
// //       className="bg-[#2F333A]"
// //       variants={footerVariants}
// //       initial="hidden"
// //       animate="visible"
// //     >
// //       <div className="container mx-auto p-4 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 text-[#ffffff]">
// //         <div className="text-[14px]">
// //           <p className="mb-3">ABOUT US</p>
// //           <p>
// //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
// //             assumenda! Quam cupiditate saepe tenetur quas iusto, dolores
// //             veritatis reprehenderit
// //           </p>
// //           <div className="flex gap-3 mt-[20px] text-[18px]">
// //             <motion.span 
// //               className="hover:bg-[#FF7004] hover:rounded-full p-[5px]" 
// //               variants={iconVariants}
// //               initial="hidden"
// //               animate="visible"
// //             >
// //               <FaFacebook />
// //             </motion.span>
// //             <motion.span 
// //               className="hover:bg-[#FF7004] hover:rounded-full p-[5px]" 
// //               variants={iconVariants}
// //               initial="hidden"
// //               animate="visible"
// //             >
// //               <FaTwitter />
// //             </motion.span>
// //             <motion.span 
// //               className="hover:bg-[#FF7004] hover:rounded-full p-[5px]" 
// //               variants={iconVariants}
// //               initial="hidden"
// //               animate="visible"
// //             >
// //               <FaLinkedin />
// //             </motion.span>
// //             <motion.span 
// //               className="hover:bg-[#FF7004] hover:rounded-full p-[5px]" 
// //               variants={iconVariants}
// //               initial="hidden"
// //               animate="visible"
// //             >
// //               <FaYoutube />
// //             </motion.span>
// //             <motion.span 
// //               className="hover:bg-[#FF7004] hover:rounded-full p-[5px]" 
// //               variants={iconVariants}
// //               initial="hidden"
// //               animate="visible"
// //             >
// //               <FaPinterest />
// //             </motion.span>
// //           </div>
// //         </div>
// //         <div className="text-[14px]">
// //           <p className="mb-3">INFORMATION</p>
// //           <p>About us</p>
// //           <p>Manufactures</p>
// //           <p>Tracking Order</p>
// //           <p>Privacy & Policy</p>
// //           <p>Terms & Conditions</p>
// //         </div>
// //         <div className="text-[14px]">
// //           <p className="mb-3">MY ACCOUNT</p>
// //           <p>Login</p>
// //           <p>My Cart</p>
// //           <p>Wishlist</p>
// //           <p>Compare</p>
// //           <p>My Account</p>
// //         </div>
// //         <div className="text-[14px]">
// //           <p className="mb-3">NEWSLETTER</p>
// //           <input 
// //             className="border-[1px] pl-[20px] pe-[10px] py-[10px] border-[rgb(67,71,78)] bg-[#2F333A]" 
// //             type="text" 
// //             placeholder="Enter E-Mail Address"
// //           />
// //           <div className="">
// //             <button 
// //               className="flex items-center gap-1 text-[13px] py-[10px] font-[600] px-[30px] bg-[#FF7004] mt-[20px] hover:bg-[#212121]"
// //             >
// //               <BsFillSendFill className="text-[10px]" /> Subscribe
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // }

// // export default Footer;


// import React from "react";
// import { motion } from "framer-motion";
// import { BsFillSendFill } from "react-icons/bs";
// import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaPinterest } from "react-icons/fa";

// const footerVariants = {
//   hidden: { opacity: 0, scale: 0.95 },
//   visible: { 
//     opacity: 1, 
//     scale: 1, 
//     transition: { duration: 0.7, ease: 'easeOut' }
//   },
// };

// const iconVariants = {
//   hidden: { opacity: 0, rotate: -30 },
//   visible: { 
//     opacity: 1, 
//     rotate: 0, 
//     transition: { duration: 0.5, ease: 'easeInOut' }
//   },
// };

// function Footer() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle subscription logic here
//   };

//   return (
//     <motion.div 
//       className="bg-[#2F333A]"
//       variants={footerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <div className="container mx-auto p-4 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 text-[#ffffff]">
//         <div className="text-[14px]">
//           <p className="mb-3">ABOUT US</p>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
//             assumenda! Quam cupiditate saepe tenetur quas iusto, dolores
//             veritatis reprehenderit
//           </p>
//           <div className="flex gap-3 mt-[20px] text-[18px]">
//             {[
//               { icon: <FaFacebook />, link: "https://facebook.com" },
//               { icon: <FaTwitter />, link: "https://twitter.com" },
//               { icon: <FaLinkedin />, link: "https://linkedin.com" },
//               { icon: <FaYoutube />, link: "https://youtube.com" },
//               { icon: <FaPinterest />, link: "https://pinterest.com" },
//             ].map((social, index) => (
//               <motion.span 
//                 key={index} 
//                 className="hover:bg-[#FF7004] hover:rounded-full p-[5px]" 
//                 variants={iconVariants}
//                 initial="hidden"
//                 animate="visible"
//               >
//                 <a href={social.link} target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${social.icon.type.name}`}>
//                   {social.icon}
//                 </a>
//               </motion.span>
//             ))}
//           </div>
//         </div>
//         <div className="text-[14px]">
//           <p className="mb-3">INFORMATION</p>
//           {["About us", "Manufactures", "Tracking Order", "Privacy & Policy", "Terms & Conditions"].map((item, index) => (
//             <p key={index}>{item}</p>
//           ))}
//         </div>
//         <div className="text-[14px]">
//           <p className="mb-3">MY ACCOUNT</p>
//           {["Login", "My Cart", "Wishlist", "Compare", "My Account"].map((item, index) => (
//             <p key={index}>{item}</p>
//           ))}
//         </div>
//         <div className="text-[14px]">
//           <p className="mb-3">NEWSLETTER</p>
//           <form onSubmit={handleSubmit}>
//             <input 
//               className="border-[1px] pl-[20px] pe-[10px] py-[10px] border-[rgb(67,71,78)] bg-[#2F333A]" 
//               type="email" 
//               placeholder="Enter E-Mail Address"
//               required
//             />
//             <div className="">
//               <button 
//                 className="flex items-center gap-1 text-[13px] py-[10px] font-[600] px-[30px] bg-[#FF7004] mt-[20px] hover:bg-[#212121]"
//                 type="submit"
//               >
//                 <BsFillSendFill className="text-[10px]" /> Subscribe
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default Footer;


import React from "react";
import { motion } from "framer-motion";
import { BsFillSendFill } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";

const footerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.7, ease: 'easeOut' }
  },
};

const iconVariants = {
  hidden: { opacity: 0, rotate: -30 },
  visible: { 
    opacity: 1, 
    rotate: 0, 
    transition: { duration: 0.5, ease: 'easeInOut' }
  },
};

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    alert("Subscribed to the newsletter!");
  };

  return (
    <motion.div 
      className="bg-[#2F333A]"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto p-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-[#ffffff]">
        
        {/* About Us Section */}
        <div className="text-sm">
          <p className="mb-3 font-semibold">ABOUT US</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            assumenda! Quam cupiditate saepe tenetur quas iusto, dolores
            veritatis reprehenderit.
          </p>
          <div className="flex gap-3 mt-4 text-lg">
            {[
              { icon: <FaFacebook />, link: "https://facebook.com" },
              { icon: <FaTwitter />, link: "https://twitter.com" },
              { icon: <FaLinkedin />, link: "https://linkedin.com" },
              { icon: <FaYoutube />, link: "https://youtube.com" },
              { icon: <FaPinterest />, link: "https://pinterest.com" },
            ].map((social, index) => (
              <motion.span 
                key={index} 
                className="hover:bg-[#FF7004] hover:rounded-full p-2" 
                variants={iconVariants}
                initial="hidden"
                animate="visible"
              >
                <a href={social.link} target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${social.icon.type.name}`}>
                  {social.icon}
                </a>
              </motion.span>
            ))}
          </div>
        </div>
        
        {/* Information Section */}
        <div className="text-sm">
          <p className="mb-3 font-semibold">INFORMATION</p>
          {["About us", "Manufactures", "Tracking Order", "Privacy & Policy", "Terms & Conditions"].map((item, index) => (
            <p key={index} className="hover:text-[#FF7004] cursor-pointer">{item}</p>
          ))}
        </div>
        
        {/* My Account Section */}
        <div className="text-sm">
          <p className="mb-3 font-semibold">MY ACCOUNT</p>
          {[
            { name: "Login", link: "/login" },
            { name: "My Cart", link: "/cart" },
            { name: "Wishlist", link: "/wishlist" },
            { name: "Compare", link: "/compare" },  // Link to mobile compare page
            { name: "My Account", link: "/account" }
          ].map((item, index) => (
            <Link key={index} to={item.link} className="block hover:text-[#FF7004]">
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* Newsletter Section */}
        <div className="text-sm">
          <p className="mb-3 font-semibold">NEWSLETTER</p>
          <form onSubmit={handleSubmit}>
            <input 
              className="border pl-4 pr-2 py-2 border-[#43474E] bg-[#2F333A] w-full text-white mb-3" 
              type="email" 
              placeholder="Enter E-Mail Address"
              required
            />
            <div className="flex justify-start">
              <button 
                className="flex items-center gap-2 text-sm py-2 font-semibold px-4 bg-[#FF7004] hover:bg-[#212121]"
                type="submit"
              >
                <BsFillSendFill className="text-xs" /> Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Footer;
