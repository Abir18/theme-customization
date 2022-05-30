import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// import { styled } from '@mui/system';
import { Avatar, Button, Paper } from '@mui/material';
import styled from '@emotion/styled';
import PageLayout from './PageLayout';
import ButtonLayout from './ButtonLayout';
import SearchBar from './SearchBar';
import Profile from '../../Images/Ellipse 1.png';
import { DashboardContainer } from '../DashboardContainer';

const drawerWidth = 240;

// export const MyThemeComponent = styled('h1')(({ theme }) => ({
//   color: theme.palette.primary.contrastText,
//   backgroundColor: theme.palette.primary.main,
//   padding: theme.spacing(4),
//   borderRadius: theme.shape.borderRadius
// }));

const AvatarContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export default function Dashboard() {
  return (
    <DashboardContainer sx={{ display: 'flex', backgroundColor: 'red' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`
        }}
      >
        {/* <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar> */}
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <Toolbar /> */}
        <AvatarContainer>
          <Avatar
            alt="Remy Sharp"
            src={Profile}
            sx={{ width: 80, height: 80 }}
          />
          <Typography
            variant="h4"
            sx={{
              fontSize: '20px',
              color: '#1A3B7B',
              fontWeight: 700,
              fontFamily: 'Roboto',
              marginTop: '10px'
            }}
          >
            John Doe
          </Typography>
          <Typography>Student</Typography>
          <SearchBar />
        </AvatarContainer>
        <Divider />
        <List>
          {[
            'Dashboard',
            'Find Mentors',
            'Appointments',
            'Messages',
            'Notifications',
            'Profile'
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton sx={{ color: '#1A3B7B', fontWeight: 700 }}>
                <ListItemIcon sx={{ color: '#1A3B7B' }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ mt: 6 }} />
        <List>
          {['Settings', 'Log Out'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton sx={{ color: '#1A3B7B', fontWeight: 700 }}>
                <ListItemIcon sx={{ color: '#1A3B7B' }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        {/* <Toolbar /> */}
        <ButtonLayout />
        <PageLayout />
      </Box>
    </DashboardContainer>
  );
}
