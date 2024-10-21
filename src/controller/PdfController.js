import { promises as fs } from 'fs'
import path from 'path'
import PdfParse from 'pdf-parse'
import { ExtractDataFromText } from './utils/ExtractData'
export const UploadPdf = async (req, res) =>
{
    const { path: pdfPath } = req?.file
    
    try {
        const dataBuffer = await fs.readFile(pdfPath)
        const { text } = await PdfParse(dataBuffer)
        const extractData =ExtractDataFromText(text)
    }

    catch (e) {
        
    }
}