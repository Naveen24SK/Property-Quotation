import React from 'react';
import { Breadcrumbs, Button, Link, Typography, Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Card from '../../Components/houseCards/houseCard';
import Summary from '../../Components/Summary/Summary';
import Details from '../../Components/Details/Details';
import TopBar from '../../Components/Top/TopBar';
import '../../styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <TopBar />
            <div className='home-bread'>

                {/* MUI Breadcrumbs */}
                <div className='bread-contain'>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" sx={{ color: '#5078E1' }} />}
                        aria-label="breadcrumb"
                        sx={{ marginBottom: '20px', color: '#5078E1' }}
                    >
                        <Link underline="hover" color="#5078E1" href="#">
                            Add Contact
                        </Link>
                        <Link underline="hover" color="#5078E1" href="#">
                            Lead Details
                        </Link>
                        <Link underline="hover" color="#5078E1" href="#">
                            Preview and Create Lead
                        </Link>
                        <Link underline="hover" color="#5078E1" href="#">
                            Quotation Details
                        </Link>

                        {/* Custom breadcrumb with number "4" */}
                        <Box display="flex" alignItems="center"
                        >
                            <Box 
                            sx={{
                                border: '1px solid #CBD7F6',
                                backgroundColor:'white',
                                height:25,
                                width:25,
                                borderRadius: '50%',
                                display:'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: '8px',

                            }}>
                            <Box
                                sx={{
                                    backgroundColor: '#5078E1',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: 18,
                                    height: 18,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                4
                            </Box>
                            </Box>
                            <Typography color="#5078E1">Preview and Create</Typography>
                        </Box>
                    </Breadcrumbs>
                </div>

                {/* Main content */}
                <div className="home-contain">
                    <Details />
                    <Card />
                    <Summary />
                </div>
                <div className='btn-section'>
                    <div className='prev-btn'>
                    <Button variant="outlined"
                    sx={{borderColor: "#E4E8EE", color: "#091B29",fontWeight: "600",
                        textAlign: "center",
                        textTransform: "none", borderRadius: "8px"}}
                    >Previous</Button>
                    </div>
                    <div className='btn-grp'>
                        <Button variant="outlined"
                        sx={{ color: "#091B29",fontWeight: "600",
                            textAlign: "center", border: '1px solid #E4E8EE',
                            textTransform: "none", borderRadius: "8px"}}>Cancel</Button>
                        <Button variant="contained" sx={{backgroundColor:"#5078E1", color: "#FFFFFF",fontWeight: "600",
                        textAlign: "center",
                        textTransform: "none", borderRadius: "8px"}}>Create Quotation</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
