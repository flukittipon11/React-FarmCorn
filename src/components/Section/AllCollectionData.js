// import React, { useState, useEffect } from "react";
// import firebase from "../../config";
// import { getAPIData } from "../../GetAPIData/getAPIData";

// const AllCollectionData = () => {
//   const [cornGrowth, setCornGrowth] = useState([]);
//   const [selectedCorn, setSelectedCorn] = useState();
//   const [sheathCorn, setSheathCorn] = useState([]);
//   const [dataSheath, setDataSheath] = useState([]);
//   const [error, setError] = useState();

//   const getAllCollection = async () => {
//     const data = await getAPIData();
//     setDataSheath(data);
//   };

//   const SelectCorn = (corn) => {
//     setSelectedCorn(corn);
//     console.log(corn);
//     firebase
//       .firestore()
//       .collection("Corn-growth")
//       .doc(corn.id)
//       .collection("Sheath-Corn")
//       .get()
//       .then((response) => {
//         const fetchedCorns = [];
//         response.forEach((doc) => {
//           const fetchedCorn = {
//             id: doc.id,
//             ...doc.data(),
//           };
//           fetchedCorns.push(fetchedCorn);
//         });
//         setSheathCorn(fetchedCorns);
//       })
//       .catch((error) => {
//         setError(error);
//       });
//   };

//   const timestampToString = (timestamp) => {
//     return Date(timestamp).toString();
//   };

//   async function getAllData() {
//     const snapshot = await firebase.firestore().collection("Corn-growth").get();
//     return snapshot.docs.map((doc) => doc.data());
//   }

//   useEffect(() => {
//     firebase
//       .firestore()
//       .collection("Corn-growth")
//       .get()
//       .then((response) => {
//         const fetchedFarms = [];
//         const fetchedData = [];
//         response.docs.forEach((doc) => {
//           const fetchedFarm = {
//             id: doc.id,
//             ...doc.data(),
//           };
//           firebase
//             .firestore()
//             .collection("Corn-growth")
//             .doc(doc.id)
//             .collection("Sheath-Corn")
//             .get()
//             .then((res) => {
//               // const DbRefs = [];
//               const count = res.docs.length;
//               console.log(count);
//               // res.docs.forEach((data) => {
//               //   const DbRef = {
//               //     id: data.id,
//               //     ...data.data(),
//               //   };
//               //   DbRefs.push(DbRef);
//               // });
//               fetchedData.push(count);
//             });
//           console.log(fetchedData);
//           fetchedFarms.push(fetchedFarm);
//         });
//         // setDataSheath(fetchedData);
//         setDataSheath(fetchedData);
//         setCornGrowth(fetchedFarms);
//         // console.log(fetchedData);
//         // console.log(fetchedFarms);
//       })
//       .catch((error) => {
//         setError(error);
//       });
//     // firebase.firestore().collection().doc();
//   }, []);

//   return (
//     <div>
//       {getAllCollection()}
//       {dataSheath.map(item=>(
//         <div>{item['length']}</div>
//       ))}

//     </div>
    
//     // <div>
//     //   {error ? <p>Ops,there is an error :(</p> : null}
//     //   <ul>
//     //     {cornGrowth.map((farm) => (
//     //       <li key={farm.id} onClick={() => SelectCorn(farm)}>
//     //         <b>{farm.Farm_name}</b> in {farm.Farm_place} has{" "}
//     //         {farm.Corn_Varieties} total seats
//     //       </li>
//     //     ))}
//     //     {/* {await getAllData()} */}
//     //     {dataSheath.map(item =>(
//     //       <p>{item}</p>

//     //     ))}
//     //   </ul>
//     //   <ul></ul>
//     //   {selectedCorn ? (
//     //     <ul>
//     //       {sheathCorn.map((res, i) => (
//     //         <li key={res.id}>
//     //           <b>
//     //             {res[i]}
//     //             {res.SheathCorn}
//     //           </b>{" "}
//     //           | {res.Length_SheathBefore} | {res.Width_SheathBefore} |{" "}
//     //         </li>
//     //       ))}
//     //     </ul>
//     //   ) : null}
//     // </div>
//   );
// };
// export default AllCollectionData;
