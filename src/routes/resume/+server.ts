import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  console.log('PDF Buffer:');
  try {
    // Read the PDF file directly from the file system
    const pdfPath = join(process.cwd(), 'src/data/Resume.pdf');
    const pdfBuffer = await readFile(pdfPath);

    return new Response(new Uint8Array(pdfBuffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="Resume.pdf"',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (error) {
    return new Response('Resume not found', { 
      status: 404,
      headers: {
        'Content-Type': 'text/plain'
      }
    });
  }
}
