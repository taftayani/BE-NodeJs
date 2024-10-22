import { PDFDocument,rgb } from "pdf-lib";
import path from 'path'
import fs from 'fs'

// Fungsi untuk membuat PDF baru dengan data yang diekstrak (Menggunakan async/await dan template literals)
export const CreateNewPdf = async (data) => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    const { width, height } = page.getSize();

    page.drawText(`H1: ${data.h1}`, { x: 50, y: height - 50, size: 25, color: rgb(0, 0, 0) });
    page.drawText(`H2: ${data.h2}`, { x: 50, y: height - 80, size: 20, color: rgb(0, 0, 0) });
    page.drawText(`A1: ${data.a1}`, { x: 50, y: height - 110, size: 15, color: rgb(0, 0, 0) });
    page.drawText(`A4: ${data.a4}`, { x: 50, y: height - 130, size: 15, color: rgb(0, 0, 0) });
    page.drawText(`B1: ${data.b1}`, { x: 50, y: height - 150, size: 15, color: rgb(0, 0, 0) });
    page.drawText(`B12: ${data.b12}`, { x: 50, y: height - 170, size: 15, color: rgb(0, 0, 0) });
    page.drawText(`C1: ${data.c1}`, { x: 50, y: height - 190, size: 15, color: rgb(0, 0, 0) });
    page.drawText(`C5: ${data.c5}`, { x: 50, y: height - 210, size: 15, color: rgb(0, 0, 0) });

    const pdfBytes = await pdfDoc.save();
    const pdfPath = path.join('uploads', 'extracted-data.pdf');
    
    fs.writeFileSync(pdfPath, pdfBytes);
    
    return pdfPath;
};