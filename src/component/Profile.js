import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BasicInfo from './BasicInfo';
import WishList from './WishList';
import History from './History';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



export default function LabTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>

            <Card style={{marginLeft: "13%" , marginTop: "4%" }} sx={{ maxWidth: 250}} >
                <CardMedia  sx={{ maxWidth: 300}}
                    component="img"
                    height="140"
                    image="https://static.remove.bg/remove-bg-web/99ab439c6e8e26adfd8c59cee4eb26f0376a9584/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
                    alt="green iguana"
                />
                </Card>
                <Card style={{marginLeft: "38%" , marginTop: "-9%"}} sx={{ maxWidth: 220}} >
                <CardContent >
                <Typography style={{textAlign: "center"}} gutterBottom variant="h5" component="div">
                       Doaa Daban
                    </Typography>
                    <Typography style={{textAlign: "center"}} variant="body2" color="text.secondary">
                        welcome to ur profile <FavoriteIcon/>
                    </Typography>
                </CardContent>
                </Card>
            <Box sx={{ width: '70%', typography: 'body1' }} style={{margin: "5%" , marginTop: "5%"}}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList style={{alignItems: "center"}} onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Your BasicInfo" value="1" />
                            <Tab label="Your WishList" value="2" />
                            <Tab label="Your History" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1"><BasicInfo /></TabPanel>
                    <TabPanel value="2"><WishList /></TabPanel>
                    <TabPanel value="3"><History /></TabPanel>
                </TabContext>
            </Box>
        </>
    );
}
