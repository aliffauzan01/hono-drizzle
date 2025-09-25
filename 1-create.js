// Mengimport Pool dari library pg
import pg from 'pg';

// Konfigurasi koneksi ke database PostgreSQL 
const pool = new pg.Pool({
  user: 'postgres', // Ganti dengan username database Anda
  host: 'localhost',
  database: 'postgres', // Ganti dengan nama database Anda
  password: 'postgres', // Ganti dengan password Anda
  port: 5432,
});


// Fungsi async untuk memasukkan data
async function tambahSantri() {
  try {
    const namaSantri = 'Ali';
    const alamatSantri = 'Surabaya';


 // Query SQL untuk INSERT data
    const queryText = `INSERT INTO crud(nama, alamat) VALUES($1, $2) RETURNING *`;
    const res = await pool.query(queryText, [namaSantri, alamatSantri]);
 
    console.log('Santri baru berhasil ditambahkan:');
    console.log(res.rows[0]); // Menampilkan data yang baru saja dimasukkan
  } catch (err) {
    console.error('Gagal menambahkan santri:', err.stack);
  } finally {

   // Menutup koneksi pool
    await pool.end();
  }
}

// Panggil fungsinya
tambahSantri();

