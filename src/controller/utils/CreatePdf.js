// Fungsi untuk membuat PDF baru dengan data yang diekstrak (Menggunakan async/await dan template literals)
export const CreateNewPdf = async (data) => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();

    const content = `
        H1: ${data.H1}
        H2: ${data.H2}
        A1: ${data.A1}
        A4: ${data.A4}
        B1: ${data.B1}
        B12: ${data.B12}
        C1: ${data.C1}
        C5: ${data.C5}
    `;

    page.drawText(content, { x: 50, y: 700 });

    return pdfDoc;
};