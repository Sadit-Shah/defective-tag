// pages/index.js
import Head from 'next/head';
import ExcelUploader from '../components/ExcelUploader';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Excel to HTML</title>
      </Head>
      <main>
        <h1>Upload and Display Excel Data</h1>
        <ExcelUploader />
      </main>
    </div>
  );
}