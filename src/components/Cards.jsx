
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
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
        <ListItemText primary={props.coin.name + ""+"("+props.coin.symbol+")"}  secondary={parseFloat(props.coin.data.price).toFixed(3)} />
       
      </ListItem>
      
    </List>

    )
}
export default Cards