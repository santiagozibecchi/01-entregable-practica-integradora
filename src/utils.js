import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";

const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);

export class Exception extends Error {
  constructor(message, status) {
    super(message);
    this.statusCode = status;
  }
}

const storage = multer.diskStorage({
  // req => express
  destination: (req, file, cb) => {
    const pathFile = path.join(__dirname, "../public/avatars");
    // primer parametro es el error en los cb
    cb(null, pathFile);
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  },
});

export const uploader = multer({
  // como y donde guarda los archivos
  storage: storage,
});
