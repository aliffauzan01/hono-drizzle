import pg from 'pg';

const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
});

async function lihatSantri() {
  try {

    // Query SQL untuk SELECT semua data
    const res = await pool.query('SELECT * FROM crud ORDER BY id ASC');

    if (res.rows.length === 0) {
      console.log('Tidak ada data crud.');
      return;
    }
    console.log('Daftar Santri:');

    // Looping untuk menampilkan setiap baris data
    res.rows.forEach(santri => {
      console.log(`ID: ${santri.id}, Nama: ${santri.nama}, Alamat: ${santri.alamat}`);
    });

  } catch (err) {
    console.error('Gagal mengambil data santri:', err.stack);
  } finally {
    await pool.end();
  }
}

lihatSantri();

