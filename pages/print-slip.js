// pages/print-slip.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PrintSlip = () => {
  const router = useRouter();
  const { row } = router.query;
  const [data, setData] = useState({});

  useEffect(() => {
    if (row) {
      setData(JSON.parse(row));
    }
  }, [row]);

  return (
    <div>
      <h2>Print Slip</h2>
      <div>
        <ul>
          {Object.entries(data).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => window.print()}>Print</button>
    </div>
  );
};

export default PrintSlip;