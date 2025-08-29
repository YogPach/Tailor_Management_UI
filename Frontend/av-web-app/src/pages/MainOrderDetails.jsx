import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// project imports
import MainCard from 'components/MainCard';

//order table for
// import OrderTable from 'main-order-detail-tabs/OrderTable';
import OrderTable from '../pages/main-order-detail-tabs/OrderTable';

// Helper function for accessibility props
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

// Custom tab panel component
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function MainOrderDetails() {
    const [value, setValue] = useState(0); // define the tab state

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <MainCard title="Main Order Details">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Order Form" {...a11yProps(0)} />
                    <Tab label="Measurement Form" {...a11yProps(1)} />
                    <Tab label="Qc Form" {...a11yProps(2)} />
                    <Tab label="Alteration Form" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <OrderTable />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Measurement Form
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Qc Form
            </CustomTabPanel>
             <CustomTabPanel value={value} index={3}>
                Alteration Form
            </CustomTabPanel>
        </MainCard>
    );
}
