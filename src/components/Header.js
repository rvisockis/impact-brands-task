import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {List, ListItem, ListItemText} from "@material-ui/core";
import {useState} from 'react';

function Header() {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    function mobileMenuHandler() {
        setMobileMenuIsOpen(!mobileMenuIsOpen);
    }

    return (
            <AppBar position="relative" color="transparent">
                <Toolbar>
                    <Typography variant="h6" className='header-logo'>
                        LOGO
                    </Typography>
                    <Button className='header-menu-item' color="inherit">HOME</Button>
                    <Button className='header-menu-item' color="inherit">SHOP</Button>
                    <Button className='header-menu-item' color="inherit">REVIEWS</Button>
                    <Button className='header-menu-item' color="inherit">BLOG</Button>
                    <IconButton className='header-menu-icon' edge="start" color="inherit" onClick={mobileMenuHandler}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
                <div className={"mobile-menu " + (mobileMenuIsOpen ? "active" : "")}>
                    <List>
                        <ListItem button>
                            <ListItemText primary='HOME' />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary='SHOP' />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary='REVIEWS' />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary='BLOG' />
                        </ListItem>
                    </List>
                </div>
            </AppBar>
    );
}

export default Header;