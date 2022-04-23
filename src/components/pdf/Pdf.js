//npm install jspdf
import {jsPDF} from 'jspdf';
const Pdf = () => {
  const generarpdf = () => {
    console.log('respuesta');
    var doc = new jsPDF('landscope');
    doc.text('Bienvenido ruben', 10,10);
    doc.save('prueba1');
  }

  return (
    <>
      <div style={{textAlign: 'center'}}>
        <button onClick={generarpdf}>Download PDF</button>
      </div>
    </>
  );
};

export {Pdf};