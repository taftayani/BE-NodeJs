// Fungsi untuk mengekstrak teks antara dua kata kunci (Menggunakan template literals dan regex)
export const ExtractBetween = (text, start, end) => {
    const regex = new RegExp(`${start}(.*?)${end}`, 's');
    const match = regex.exec(text);
    return match ? match[1].trim() : '';
};