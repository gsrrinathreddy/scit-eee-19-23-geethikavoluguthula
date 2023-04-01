import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="SREE CHAITANYA" src="https://www.careerindia.com/college-logo/128x128/9/Sree-Chaitanya-Institute-of-Technological-Sciences-Karimnagar.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="SREE CHAITANYA INSTITUTE OF TECHNOLOGICAL SCIENCES"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                75% CGPA
              </Typography>
              {" — B-TECH ELECTRIAL & ELECTRONICS ENGINEERING"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="JYOTHISHMATHI" src="https://www.targetadmission.com/img/logos/1710263615.png" />
        </ListItemAvatar>
        <ListItemText
          primary="JYOTHISHMATHI INSTITUTE OF TECHNOLOGY SCIENCES"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                76.5% CGPA
              </Typography>
              {" — DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="OXFORD" src="https://th.bing.com/th/id/OIP.6abAjhRLZw20007YlghFNQEsBG?pid=ImgDet&rs=1" />
        </ListItemAvatar>
        <ListItemText
          primary="OXFORD HIGH SCHOOL"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                90% CGPA
              </Typography>
              {' — SECONDARY SCHOOL CERTIFICATE'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}