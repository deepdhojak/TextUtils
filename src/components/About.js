import React, { useState } from 'react'

export default function About() {

  const [myStyle, setmyStyle] = useState(
    {
      color: 'black',
      backgroundColor: 'white'
    })
  const [btntext, setBtnText] = useState("Enable Dark Mode")

  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setmyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white'
      })
      setBtnText("Enable Light Mode")
    }
    else {
      setmyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setBtnText("Enable Dark Mode")
    }
  }

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button type="button" onClick={toggleStyle} className="btn btn-primary">Enable Dark Mode </button>
      </div>
    </div>
  )
}

// import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// export default function Navbar(props) {
//   return (
//     <nav
//       className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}
//     >
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           {props.title}
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/about">
//                 {props.aboutText}
//               </Link>
//             </li>
//           </ul>

//           {/* Enable Dark Mode */}
//           <div
//             className={`form-check form-switch text-${
//               props.mode === "light" ? "dark" : "light"
//             } mx-2`}
//           >
//             <input
//               className="form-check-input"
//               onClick={props.toggleMode}
//               type="checkbox"
//               role="switch"
//               id="flexSwitchCheckDefault"
//             />
//             <label
//               className="form-check-label"
//               htmlFor="flexSwitchCheckDefault"
//             >
//               DarkMode
//             </label>
//           </div>

//           {/* Search Button */}
//           <form className="d-flex" role="search">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button className="btn btn-primary" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }

// Navbar.defaultProps = {
//     title: 'Text',
//     aboutText: 'About'
// };

// Navbar.propTypes= { title: PropTypes.string.isRequired,
//                     aboutText: PropTypes.string.isRequired
//                   } 
