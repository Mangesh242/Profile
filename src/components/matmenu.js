import React from 'react';  
import Button from '@material-ui/core/Button';  
import Menu from '@material-ui/core/Menu';  
import MenuItem from '@material-ui/core/MenuItem';  
import MenuIcon from '@material-ui/icons/Menu';
import './matmenu.css';
 
export default function MenuDemo() {  
        const [anchorEl, open] = React.useState(null);  
        const handleClick = event => {  
                open(event.currentTarget);  
        };  
        const routes=["/","/about","/contact"]
        const handleClose = (nav) => {  
            if(routes.indexOf(nav)>-1){
                window.location.href = nav;  
            }else{
                open(null);
            }
        };  
        return (  
                <>  
                         
                        <div>  
                        

                                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>  
                                <MenuIcon className="IconStyle"/>
      </Button>  
                                
                                <Menu  
                                        id="Menu"  
                                        anchorEl={anchorEl}  
                                        keepMounted  
                                        open={Boolean(anchorEl)}  
                                        onClose={handleClose}  
                                >  
                            <MenuItem onClick={() => {handleClose("/")}}>Home</MenuItem>
                            <MenuItem onClick={() => {handleClose("/about")}}>About me</MenuItem>
                            <MenuItem onClick={() => {handleClose("/contact")}}>Contact</MenuItem>
                            
                                       
                            </Menu>  
                                
                        </div>  
                </>  
        );  
}  