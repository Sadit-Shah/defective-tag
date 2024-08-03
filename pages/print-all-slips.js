// // // // pages/print-all-slips.js
// // // import { useRouter } from 'next/router';
// // // import { useEffect, useState } from 'react';

// // // const PrintAllSlips = () => {
// // //   const router = useRouter();
// // //   const { data } = router.query;
// // //   const [rows, setRows] = useState([]);

// // //   useEffect(() => {
// // //     if (data) {
// // //       setRows(JSON.parse(data));
// // //     }
// // //   }, [data]);

// // //   return (
// // //     <div>
// // //       <h2>Print All Slips</h2>
// // //       <div>
// // //         {rows.map((row, index) => (
// // //           <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
// // //             <h3>Row {index + 1}</h3>
// // //             <div style={{ display: 'flex', flexDirection: 'row' }}>
// // //               {Object.entries(row).map(([key, value]) => (
// // //                 <div key={key} style={{ marginRight: '20px' }}>
// // //                   <strong>{key}:</strong> {value}
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //       <button onClick={() => window.print()}>Print</button>
// // //     </div>
// // //   );
// // // };

// // // export default PrintAllSlips;



// // // pages/print-all-slips.js
// // import { useRouter } from 'next/router';
// // import { useEffect, useState } from 'react';

// // const PrintAllSlips = () => {
// //   const router = useRouter();
// //   const { data } = router.query;
// //   const [rows, setRows] = useState([]);

// //   useEffect(() => {
// //     if (data) {
// //       setRows(JSON.parse(data));
// //     }
// //   }, [data]);

// //   return (
// //     <div style={{ padding: '20px' }}>
// //       <h2>Print All Slips</h2>
// //       <div>
// //         {rows.map((row, index) => (
// //           <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', pageBreakInside: 'avoid' }}>
// //             <h3>Row {index + 1}</h3>
// //             <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
// //               {Object.entries(row).map(([key, value]) => (
// //                 <div key={key} style={{ marginRight: '20px', marginBottom: '10px' }}>
// //                   <strong>{key}:</strong> {value}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <button onClick={() => window.print()}>Print</button>
// //     </div>
// //   );
// // };

// // export default PrintAllSlips;


// // pages/print-all-slips.js
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';

// const PrintAllSlips = () => {
//   const router = useRouter();
//   const { data } = router.query;
//   const [rows, setRows] = useState([]);

//   useEffect(() => {
//     if (data) {
//       setRows(JSON.parse(data));
//     }
//   }, [data]);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Print All Slips</h2>
//       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         {rows.map((row, index) => (
//           <div key={index} style={{ 
//             border: '1px solid #ccc', 
//             padding: '10px', 
//             margin: '10px', 
//             width: 'calc(33.33% - 20px)', 
//             boxSizing: 'border-box' }}>
//             <h3>Row {index + 1}</h3>
//             <div>
//               {Object.entries(row).map(([key, value]) => (
//                 <div key={key}>
//                   <strong>{key}:</strong> {value}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//       <button onClick={() => window.print()} style={{ marginTop: '20px', padding: '10px 20px' }}>Print</button>
//     </div>
//   );
// };

// export default PrintAllSlips;



// pages/print-all-slips.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PrintAllSlips = () => {
  const router = useRouter();
  const { data } = router.query;
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (data) {
      setRows(JSON.parse(data));
    }
  }, [data]);

  return (
    <div style={{ padding: '5px', fontSize:'10px' }}>
      {/* <h2>Print All Slips</h2> */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0px' }}>
        {rows.map((row, index) => (
          <div key={index} style={{ 
            border: '1px solid #ccc', 
            padding: '10px', 
            margin: '7px', 
            width: 'calc(33.33% - 20px)', 
            boxSizing: 'border-box', 
            borderRadius: '5px',
            boxShadow: '0 0 5px rgba(0,0,0,0.1)',
            backgroundColor: '#f9f9f9'
          }}>
            {/* <h3 style={{ marginTop: '0' }}>Row {index + 1}</h3> */}
            <h4 style={{  marginTop:'1px',marginBottom:'0px', textAlign:'center' }}>MD-TRADERS, SRINAGAR</h4>
            <h4 style={{marginTop:'5px',marginBottom:'1px', textAlign:'center' }}>Defective Part Return Tag</h4>
            
            <div style={{ border: '1px solid #ddd', borderRadius: '5px' }}>
              {Object.entries(row).map(([key, value], i) => (
                <div key={key} style={{ 
                  borderBottom: i < Object.entries(row).length - 1 ? '1px solid #ddd' : 'none',
                  padding: '3px 5px 3px 5px',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                  <strong>{key}:</strong>
                  <span>{value}</span>
                  
                </div>
              ))}
            </div>
            
            <div style={{ display: 'flex', flexDirection:'column', border: '1px solid #ddd',borderTop:'0px'}}> 
            <div style={{ padding: '3px 5px 3px 5px', display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid #ddd'}}><strong><span>Defect Observed</span></strong><span>Leakage</span></div>
             <div style={{ padding: '3px 5px 3px 5px', display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid #ddd'}}><strong><span>Affected Area</span></strong><span>Tap</span></div>
              <div style={{ padding: '3px 5px 3px 5px', display:'flex', alignItems:'center', justifyContent:'space-between'}}><strong><span>Workdone</span></strong><span>Part Replaced</span></div>
          </div>
          
          </div>
        ))}
      </div>
      <button onClick={() => window.print()} style={{ marginTop: '20px', padding: '10px 20px' }}>Print</button>
    </div>
  );
};

export default PrintAllSlips;