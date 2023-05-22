import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import { useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

export const BarraDeFerramentas: React.FC = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    if (!isSmallScreen) {
        return null; // Não exibe o componente em telas não "sm"
    }
    return (
        <BottomNavigation
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                width: '100%',
                margin: 'auto',
            }}
        >
            <Link to="/agua">
                <BottomNavigationAction
                    label="Água"
                    value="agua"
                    icon={<LocalDrinkIcon />}
                    sx={{ color: '#03a9f4', width:'30%' }}
                />
            </Link>
            <Link to="/exercicios">
                <BottomNavigationAction
                    label="Exercícios"
                    value="exercicios"
                    icon={<FitnessCenterIcon />}
                    sx={{ color: '#ffc107', width:'40%' }}
                />
            </Link>
            <Link to="/alimentacao">
                <BottomNavigationAction
                    label="Alimentação"
                    value="alimentacao"
                    icon={<RestaurantIcon />}
                    sx={{ color: '#4caf50', width:'30%' }}
                />
            </Link>
        </BottomNavigation>
    );
};
