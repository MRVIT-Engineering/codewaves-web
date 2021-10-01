import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: 16,
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

interface TableProps {
  columns: string[];
  rows: any[];
}

export const MTable = ({ columns, rows }: TableProps) => {
  console.log(columns, [...rows]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map(c => (
              <StyledTableCell>{c}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              {row[index].map((cell: string) => (
                <TableCell>{cell}</TableCell>
              ))}
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
