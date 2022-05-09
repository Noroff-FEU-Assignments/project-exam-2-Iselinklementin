// import React from "react";
// import { ENQUIRES_URL } from "constants/api";

// function EnquireCall(props) {
//   return (
//     <>
//       <div>Enquires:</div>
//       {props.enquire.map(message => {
//         return (
//           <div key={message.acf.id}>
//             <h3 key={message.acf.id}>{message.acf.title}</h3>
//             <p>sent: {message.acf.date}</p>
//             <p>message: {message.acf.message}</p>
//             <p>sent from: {message.acf.email}</p>
//           </div>
//         );
//       })}
//     </>
//   );
// }

// export default EnquireCall;

// export async function getStaticProps() {
//   let enquire = [];

//   try {
//     const response = await axios.get(ENQUIRES_URL);
//     enquire = response.data;
//   } catch (error) {
//     console.log(error);
//   }

//   return {
//     props: {
//       enquire: enquire,
//     },
//   };
// }
