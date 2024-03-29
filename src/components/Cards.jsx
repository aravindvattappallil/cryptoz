
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./style.css"

const Cards =(props)=>{
    return(
      
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
      <h3 className='rank' sx ={{p:"0px", width:"10px"}} >{props.coin.score+1} . </h3>
        <ListItemAvatar>
          <Avatar  src ={props.coin.small}>
            <ImageIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.coin.name + ""+"("+props.coin.symbol+")"}  secondary={"$"+" "+parseFloat(props.coin.data.price).toFixed(3)} />
       
      </ListItem>
      
    </List>




    //  <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //       <TableCell># </TableCell>
    //         <TableCell>Coin</TableCell>
    //         <TableCell align="right">Current Price</TableCell>
    //         <TableCell align="right">Ath</TableCell>
    //         <TableCell align="right">24 (High)</TableCell>
    //         <TableCell align="right">24 (Low)</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {props.coin.map((row) => (
    //         <TableRow
    //           key={row.name}
    //           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //         >
    //             <TableCell>{row.item.score+1}</TableCell>
    //           <TableCell component="th" scope="row">
    //             <div className='parent_coin'>
    //             <img className='image_icon' src={row.item.thumb} />
    //            <div className='market_name_row'>{row.item.name +" "+"("+row.item.symbol+")"}</div>
    //             </div>
    //           </TableCell>
    //           <TableCell align="right">$ {parseFloat(row.item.data.price).toFixed(3)}</TableCell>
    //           <TableCell align="right">$ {row.ath}</TableCell>
    //           <TableCell align="right">$ {row.high_24h}</TableCell>
    //           <TableCell align="right">$ {row.low_24h}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>

    )
}
export default Cards