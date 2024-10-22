import express from 'express'
import multer from 'multer';
import { UploadPdf } from './src/controller/PdfController.js';

const app = express();
const upload = multer({ dest: 'uploads/' })

app.post('/upload', upload.single('file'), UploadPdf)


const PORT = 3000
app.listen(PORT, () => { console.log('tes port: ', PORT) })
