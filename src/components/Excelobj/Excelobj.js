import ReactExport from 'react-export-excel';
import { dataSet1 } from './dataSet1';
import { dataSet2 } from './dataSet2';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const Excelobj = () => {
    return (<>
                <ExcelFile element={<button>Exportar a excel</button>} filename='Empleados'>
                    <ExcelSheet data={dataSet1} name='Employees'>
                        <ExcelColumn label='Nombre' value='name'/>
                        <ExcelColumn label='Dinero' value='amount'/>
                        <ExcelColumn label='Genero' value='sex'/>
                        <ExcelColumn label='Estado Matrimonial' value='is_married'/>
                    </ExcelSheet>
                    <ExcelSheet data={dataSet2} name='Leaves'>
                        <ExcelColumn name='Nombre' value = 'name'/>
                        <ExcelColumn name='Sale de' value = 'total'/>
                        <ExcelColumn name='Hojas Restantes' value = 'remainig'/>
                    </ExcelSheet>
                </ExcelFile>
            </>);
}

export default Excelobj;