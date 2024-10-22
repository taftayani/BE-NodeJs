import fsSync from 'fs'
import PdfParse from 'pdf-parse'
import { ExtractDataFromText } from './utils/ExtractData.js'
import { CreateNewPdf } from './utils/CreatePdf.js'

export const UploadPdf = async (req, res) =>
{
   
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'File tidak ada' });
        }

        const dataBuffer =fsSync.readFileSync(req?.file?.path)
        const { text } = await PdfParse(dataBuffer)
        const extractData = ExtractDataFromText(text)
        
        const createNewPdf = await CreateNewPdf(extractData)

        res.download(createNewPdf, '');

        res?.status(200)?.json({
            status:'success',
            message:'PDF berhasil diextrak dan disimpan'
        })
    }

    catch (e) {
        res?.status(500)?.json({
            message:'Telah terjadi error server'
        })
    }

}