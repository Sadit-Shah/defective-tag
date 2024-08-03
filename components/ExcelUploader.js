// // // // components/ExcelUploader.js
// // // import { useState } from 'react';
// // // import { useDropzone } from 'react-dropzone';
// // // import * as XLSX from 'xlsx';

// // // export default function ExcelUploader() {
// // //   const [data, setData] = useState([]);

// // //   const onDrop = (acceptedFiles) => {
// // //     const file = acceptedFiles[0];
// // //     const reader = new FileReader();

// // //     reader.onload = (e) => {
// // //       const binaryStr = e.target.result;
// // //       const workbook = XLSX.read(binaryStr, { type: 'binary' });
// // //       const sheetName = workbook.SheetNames[0];
// // //       const sheet = workbook.Sheets[sheetName];
// // //       const jsonData = XLSX.utils.sheet_to_json(sheet);
// // //       setData(jsonData);
// // //     };

// // //     reader.readAsBinaryString(file);
// // //   };

// // //   //const { getRootProps, getInputProps } = useDropzone({ onDrop });
// // //   const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

// // //   return (
// // //     <div>
// // //       <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', cursor: 'pointer' }}>
// // //         <input {...getInputProps()} />
// // //         <p>Drag & drop an Excel file here, or click to select one</p>
// // //       </div>
// // //       <div>
// // //         <h2>Excel Data</h2>
// // //         <table>
// // //           <thead>
// // //             <tr>
// // //               {data.length > 0 && Object.keys(data[0]).map((key) => (
// // //                 <th key={key}>{key}</th>
// // //               ))}
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {data.map((row, index) => (
// // //               <tr key={index}>
// // //                 {Object.values(row).map((cell, i) => (
// // //                   <td key={i}>{cell}</td>
// // //                 ))}
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // // // components/ExcelUploader.js
// // // import { useState } from 'react';
// // // import { useDropzone } from 'react-dropzone';
// // // import * as XLSX from 'xlsx';

// // // export default function ExcelUploader() {
// // //   const [data, setData] = useState([]);

// // //   const onDrop = (acceptedFiles) => {
// // //     const file = acceptedFiles[0];
// // //     const reader = new FileReader();

// // //     reader.onload = (e) => {
// // //       const binaryStr = e.target.result;
// // //       const workbook = XLSX.read(binaryStr, { type: 'binary' });
// // //       const sheetName = workbook.SheetNames[0];
// // //       const sheet = workbook.Sheets[sheetName];
// // //       const jsonData = XLSX.utils.sheet_to_json(sheet);
// // //       setData(jsonData);
// // //     };

// // //     reader.readAsBinaryString(file);
// // //   };

// // //   const { getRootProps, getInputProps } = useDropzone({ onDrop });

// // //   return (
// // //     <div>
// // //       <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', cursor: 'pointer' }}>
// // //         <input {...getInputProps()} />
// // //         <p>Drag & drop an Excel file here, or click to select one</p>
// // //       </div>
// // //       <div>
// // //         <h2>Excel Data</h2>
// // //         <div>
// // //           {data.map((row, index) => (
// // //             <div key={index} style={{ marginBottom: '10px' }}>
// // //               <h3>Row {index + 1}</h3>
// // //               <ul>
// // //                 {Object.entries(row).map(([key, value]) => (
// // //                   <li key={key}>
// // //                     <strong>{key}:</strong> {value}
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }





// // // components/ExcelUploader.js
// // import { useState } from 'react';
// // import { useDropzone } from 'react-dropzone';
// // import * as XLSX from 'xlsx';
// // import { useRouter } from 'next/router';

// // export default function ExcelUploader() {
// //   const [data, setData] = useState([]);
// //   const router = useRouter();

// //   const onDrop = (acceptedFiles) => {
// //     const file = acceptedFiles[0];
// //     const reader = new FileReader();

// //     reader.onload = (e) => {
// //       const binaryStr = e.target.result;
// //       const workbook = XLSX.read(binaryStr, { type: 'binary' });
// //       const sheetName = workbook.SheetNames[0];
// //       const sheet = workbook.Sheets[sheetName];
// //       const jsonData = XLSX.utils.sheet_to_json(sheet);
// //       setData(jsonData);
// //     };

// //     reader.readAsBinaryString(file);
// //   };

// //   const { getRootProps, getInputProps } = useDropzone({ onDrop });

// //   const handlePrint = (row) => {
// //     router.push({
// //       pathname: '/print-slip',
// //       query: { row: JSON.stringify(row) },
// //     });
// //   };

// //   return (
// //     <div>
// //       <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', cursor: 'pointer' }}>
// //         <input {...getInputProps()} />
// //         <p>Drag & drop an Excel file here, or click to select one</p>
// //       </div>
// //       <div>
// //         <h2>Excel Data</h2>
// //         <div>
// //           {data.map((row, index) => (
// //             <div key={index} style={{ marginBottom: '10px' }}>
// //               <h3>Row {index + 1}</h3>
// //               <ul>
// //                 {Object.entries(row).map(([key, value]) => (
// //                   <li key={key}>
// //                     <strong>{key}:</strong> {value}
// //                   </li>
// //                 ))}
// //               </ul>
// //               <button onClick={() => handlePrint(row)}>Print Slip</button>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }






// // components/ExcelUploader.js
// import { useState } from 'react';
// import { useDropzone } from 'react-dropzone';
// import * as XLSX from 'xlsx';
// import { useRouter } from 'next/router';

// export default function ExcelUploader() {
//   const [data, setData] = useState([]);
//   const router = useRouter();

//   const onDrop = (acceptedFiles) => {
//     const file = acceptedFiles[0];
//     const reader = new FileReader();

//     reader.onload = (e) => {
//       const binaryStr = e.target.result;
//       const workbook = XLSX.read(binaryStr, { type: 'binary' });
//       const sheetName = workbook.SheetNames[0];
//       const sheet = workbook.Sheets[sheetName];
//       const jsonData = XLSX.utils.sheet_to_json(sheet);
//       setData(jsonData);
//     };

//     reader.readAsBinaryString(file);
//   };

//   const { getRootProps, getInputProps } = useDropzone({ onDrop });

//   const handlePrintAll = () => {
//     router.push({
//       pathname: '/print-all-slips',
//       query: { data: JSON.stringify(data) },
//     });
//   };

//   return (
//     <div>
//       <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', cursor: 'pointer' }}>
//         <input {...getInputProps()} />
//         <p>Drag & drop an Excel file here, or click to select one</p>
//       </div>
//       <div>
//         <h2>Excel Data</h2>
//         <div>
//           {data.map((row, index) => (
//             <div key={index} style={{ marginBottom: '10px' }}>
//               <h3>Row {index + 1}</h3>
//               <ul>
//                 {Object.entries(row).map(([key, value]) => (
//                   <li key={key}>
//                     <strong>{key}:</strong> {value}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//         {data.length > 0 && (
//           <button onClick={handlePrintAll}>Print All Slips</button>
//         )}
//       </div>
//     </div>
//   );
// }




// components/ExcelUploader.js
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import * as XLSX from 'xlsx';
import { useRouter } from 'next/router';

export default function ExcelUploader() {
  const [data, setData] = useState([]);
  const router = useRouter();

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      setData(jsonData);
    };

    reader.readAsBinaryString(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handlePrintAll = () => {
    router.push({
      pathname: '/print-all-slips',
      query: { data: JSON.stringify(data) },
    });
  };

  return (
    <div>
      <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', cursor: 'pointer' }}>
        <input {...getInputProps()} />
        <p>Drag & drop an Excel file here, or click to select one</p>
      </div>
      <div>
        <h2>Excel Data</h2>
        <div>
          {data.map((row, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <h3>Row {index + 1}</h3>
              <ul>
                {Object.entries(row).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {data.length > 0 && (
          <button onClick={handlePrintAll}>Print All Slips</button>
        )}
      </div>
    </div>
  );
}