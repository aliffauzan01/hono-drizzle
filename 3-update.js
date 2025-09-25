// file: 3-update.js
import pg from 'pg';

// Konfigurasi koneksi ke database PostgreSQL 
const pool = new pg.Pool({
  user: 'postgres', // Ganti dengan username database Anda
  host: 'localhost',
  database: 'postgres', // Ganti dengan nama database Anda
  password: 'postgres', // Ganti dengan password Anda
  port: 5432,
});

async function updateCrud
(id, nama, alamat) {
  const client = await pool.connect();
  try {
    const query = 'UPDATE crud SET nama = $1, alamat = $2 WHERE id = $3';
    const values = [nama, alamat, id];
    const res = await client.query(query, values);

    if (res.rowCount === 0) {
      console.log(`Santri dengan ID ${id} tidak ditemukan.`);
    } else {
      console.log('Data santri berhasil diubah.');
    }
  } catch (err) {
    console.error('Gagal mengubah data santri:', err.stack);
  } finally {
    client.release();
    pool.end(); // tutup koneksi kalau file ini hanya untuk sekali jalan
  }
}

// Contoh pemanggilan
updateCrud(1, 'Ahmad', 'Bandung');
