// import React, { useState } from "react";
// import CustomInput from "./Input";

// function Crud() {
//   const [add, setadd] = useState([]);
//   const [change, setchange] = useState("");

//   function onchange(e) {
//     console.log(e.target.value);
//     // setchange(e.target.value);
//   }

//   function onSubmit(value) {
//     console.log(value);
//   }

//   return (
//     <div>
//       <h2> Add favourite color</h2>
//       <form onSubmit={onSubmit}>
//         <CustomInput
//           placeholder={"enter the favourite color"}
//           title={"Favourite color"}
//           onchange={onchange}
//           value={change}
//           name={"color"}
//           type={"text"}
//         />
//         <button type="submit">ADD</button>
//       </form>
//     </div>
//   );
// }

// export default Crud;
