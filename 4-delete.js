
// file: 4-delete.js
import pool from './db.js';

async function deletecrud(id) {
  const client = await pool.connect();
  try {
    const query = 'DELETE FROM crud WHERE id = $1';
    const values = [id];
    const res = await client.query(query, values);

    if (res.rowCount === 0) {
      console.log(`Santri dengan ID ${id} tidak ditemukan.`);
    } else {
      console.log('Data santri berhasil dihapus.');
    }
  } catch (err) {
    console.error('Gagal menghapus data santri:', err.stack);
  } finally {
    client.release();
  }
}

// Contoh pemanggilan
deletecrud(2);
