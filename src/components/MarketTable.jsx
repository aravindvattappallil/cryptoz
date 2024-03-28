import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./style.css"



export default function BasicTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell># </TableCell>
            <TableCell>Coin</TableCell>
            <TableCell align="right">Current Price</TableCell>
            <TableCell align="right">Ath</TableCell>
            <TableCell align="right">24 (High)</TableCell>
            <TableCell align="right">24 (Low)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.coin.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell>{row.market_cap_rank}</TableCell>
              <TableCell component="th" scope="row">
                <div className='parent_coin'>
                <img className='image_icon' src={row.image} />
               <div className='market_name_row'>{row.name}</div>
                </div>
              </TableCell>
              <TableCell align="right">$ {row.current_price}</TableCell>
              <TableCell align="right">$ {row.ath}</TableCell>
              <TableCell align="right">$ {row.high_24h}</TableCell>
              <TableCell align="right">$ {row.low_24h}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

