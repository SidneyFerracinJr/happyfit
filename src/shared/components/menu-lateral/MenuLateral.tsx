// componente menu lateral da aplicação
import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme, Box } from '@mui/material';
import { useAppThemeContext, useDrawerContext } from '../../contexts';
import React from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

interface IListItemLinkProps {
    to: string;
    icon: string;
    label: string;
    onClick: (() => void) | undefined;
}
const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick }) => {
    const navigate = useNavigate();

    //deixar selecionado o menu
    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: false });

    const handleClick = () => {
        navigate(to);
        onClick?.();
    };

    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    );
};

export const MenuLateral: React.FC = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
    const { toggleTheme } = useAppThemeContext();

    return (
        <>
            {/* elemento drawer da aplicacao */}
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
                    <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
                        {/* icone de avatar */}
                        <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12) }} alt='Sidney Ferracin Jr.' src='https://avatars.githubusercontent.com/u/64179428?v=4' /> 
                    </Box>
                    <Divider />
                    <Box>
                        <List component='nav'>
                            {drawerOptions.map(drawerOptions => (
                                <ListItemLink
                                    key={drawerOptions.path}
                                    to={drawerOptions.path}
                                    icon={drawerOptions.icon}
                                    label={drawerOptions.label}
                                    onClick={smDown ? toggleDrawerOpen : undefined} // nao ficar mudando toda hora o drawer quando o tamanho é suficiente
                                />
                            ))}
                        </List>
                    </Box>
                </Box>
                {/* Item Alternar Tema do menu lateral */}
                <Box flex={1}>
                    <List component='nav'>
                        <ListItemButton onClick={toggleTheme}>
                            <ListItemIcon>
                                <Icon>brightness_4</Icon>
                            </ListItemIcon>
                            <ListItemText primary="Alternar Tema" />
                        </ListItemButton>
                    </List>
                </Box>
            </Drawer>

            <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
};