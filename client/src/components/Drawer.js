import React, {useState} from 'react'
import {Drawer, IconButton, List, ListItemIcon, ListItemText} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'

export default function DrawerComp(){
    const [open, setOpen] = useState(false)
    return (
        <>
        <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
   
                <ListItemIcon>
                    <ListItemText>
                        Products
                    </ListItemText>
                </ListItemIcon>
           
        </List>
        </Drawer>
        <IconButton>
            <MenuIcon/>
        </IconButton>
        </>
    )
}