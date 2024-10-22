// Fungsi untuk mengekstrak data dari teks PDF (ES6 Arrow Function dan Destructuring)
export const ExtractDataFromText = (text) =>
{
    const h1 = text.match(/H\.1\s+NOMOR\s+:\s+([\d\s]+)/)?.[1] || 'Tidak ditemukan';
    const h2 = text.match(/H\.2\s*(.*)/)?.[1] || 'Tidak ditemukan';

    const a1 = text.match(/A\.1\s*NPWP\s*:\s*(.*)/)?.[1] || 'Tidak ditemukan';
    const a4 = text.match(/A\.3\s*Nama\s*(.*)/)?.[1] || 'Tidak ditemukan';


    const b1 = text.match(/B\.1\s*(.*)/)?.[1] || 'Tidak ditemukan';
    const b12 = text.match(/B.12: (.+)/)?.[1] || 'Tidak ditemukan';

    const c1 = text.match(/C.1: (.+)/)?.[1] ||'Tidak ditemukan';
    const c5 = text.match(/C.5: (.+)/)?.[1] || 'Tidak ditemukan';

    return { h1, h2, a1, a4, b1, b12, c1, c5 }
}