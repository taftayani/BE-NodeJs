// Fungsi untuk mengekstrak data dari teks PDF (ES6 Arrow Function dan Destructuring)
export const ExtractDataFromText = (text) => {
    const data = {};
    data.H1 = extractBetween(text, 'H1:', 'H2:');
    data.H2 = extractBetween(text, 'H2:', 'A1:');
    data.A1 = extractBetween(text, 'A1:', 'A4:');
    // Tambahkan bagian lainnya sesuai kebutuhan
    return data;
};