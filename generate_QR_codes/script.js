const QRCode = require('qrcode');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const qrData = require('../guestAccessList.json'); // Your QR code data source

// default letter size: 612x792 points
const doc = new PDFDocument();
const writeStream = fs.createWriteStream('output.pdf');
doc.pipe(writeStream);

doc.registerFont('french', './im-fell-french-pro.otf');
doc.font('french');

const marginX = 46;           // Left and right margin
const gapX = 40;             // Horizontal gap between QR codes
const qrWidth = 100;         
const topMargin = 32;        
const rowHeight = 130;       
const gapY = 32;             // Vertical gap between rows
const columnsPerPage = 4;    
const rowsPerPage = 4;       
const itemsPerPage = columnsPerPage * rowsPerPage; 

if (!Array.isArray(qrData)) {
  console.error('Error: qrData is not an array.');
  doc.end();
  process.exit(1);
}

const validData = qrData.filter(data => {
  if (!data.code || !Array.isArray(data.guests)) {
    console.error('Invalid data entry, skipping:', data);
    return false;
  }
  return true;
});

if (validData.length === 0) {
  console.error('Error: No valid data entries found.');
  doc.end();
  process.exit(1);
}

(async () => {
  for (const [index, data] of validData.entries()) {
    // Calculate page, row, and column
    const page = Math.floor(index / itemsPerPage);
    const itemInPage = index % itemsPerPage;
    const row = Math.floor(itemInPage / columnsPerPage);
    const column = itemInPage % columnsPerPage;

    // Add new page if starting a new set of 20 items
    if (index > 0 && itemInPage === 0) {
      doc.addPage();
    }

    const x = marginX + column * (qrWidth + gapX);
    const y = topMargin + row * (rowHeight + gapY);

    // Generate QR code
    const qrBuffer = await QRCode.toBuffer(`https://ada2025dorian.pl/guestAccess/${data.code}`, { width: 100 });
    doc.image(qrBuffer, x, y, { fit: [100, 100] });

    // Add caption
    const caption = data.code;
    doc.fontSize(10);
    doc.text(caption, x, y + 105, { width: 100, align: 'center' });

    console.log(`Item ${index}: page ${page}, row ${row}, column ${column}, y=${y}, caption y=${y + 105}`);
  }

  doc.end();
})();

writeStream.on('finish', () => {
  console.log('PDF generated successfully as output.pdf');
});