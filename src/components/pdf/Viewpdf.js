import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.parcel';
pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
const Viewpdf = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    function ondocument(numPages){
        setNumPages(numPages);
        setPageNumber(1);
    };
    return (
            <>
                <Document file='aprendiendo.pdf' onLoadSuccess={ondocument} >
                    <Page pageNumber={pageNumber}/>
                </Document>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </>
            );
}
export { Viewpdf };