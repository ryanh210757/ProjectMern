import {AppBar, Toolbar, Typography, Grid, Tabs, Tab} from '@material-ui/core'
import React, {useState} from 'react'
import useStyles from '../styles'
import DrawerComp from './Drawer'
export default function Navbar({links}){
    const classes = useStyles()
    const [value, setValue] = useState(0)

    return (
        <AppBar>
            <Toolbar>
               <Grid container>
               <Typography variant="h4" align="center">Cheesecakes Galore & More</Typography>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={5}>
                        <Tabs indicatorcolor="secondary" textcolor="inherit" value={value} onChange={(e, val) => setValue(val)}>
                           {links.map((link, index) => (
                            <Tab key={index} label={link}/>
                           ))}
                        </Tabs>
                    </Grid>
               </Grid>
               <DrawerComp />
            </Toolbar>
        </AppBar>
    )
}