import * as path from 'path';
import Excel from 'exceljs';

export const testFunction = () => {
    const filePath = path.resolve(__dirname, 'TestJs.xlsx');

    type Region = {
        id: number;
        name: string;
    };

    const getCellValue = (row: Excel.Row, cellIndex: number) => {
        const cell = row.getCell(cellIndex);

        return cell.value ? cell.value.toString() : '';
    };

    const main = async () => {
        const workbook = new Excel.Workbook();
        const content = await workbook.xlsx.readFile(filePath);

        const worksheet = content.worksheets[1];
        const rowStartIndex = 4;
        const numberOfRows = worksheet.rowCount - 3;

        const rows = worksheet.getRows(rowStartIndex, numberOfRows) ?? [];

        const regions = rows.map((row): Region => {
            return {
                // @ts-ignore
                id: getCellValue(row, 1),
                // @ts-ignore
                name: getCellValue(row, 2)
            };
        });

        console.log(regions);
    };
};
