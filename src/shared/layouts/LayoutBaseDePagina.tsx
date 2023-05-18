import { Icon, IconButton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';

import { useDrawerContext } from '../contexts';
import { ReactNode } from 'react';



interface ILayoutBaseDePaginaProps {
    titulo: string;
    barraDeFerramentas: ReactNode;
}
export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ children, titulo, barraDeFerramentas }) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const theme = useTheme();

    const { toggleDrawerOpen } = useDrawerContext();

    return (
        <Box height='100%' display='flex' flexDirection='column' gap={1}>
            <Box padding={1} display='flex' alignItems='center' gap={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)} >
                {smDown && (
                    <IconButton onClick={toggleDrawerOpen}>
                        <Icon>menu</Icon>
                    </IconButton>
                )}

                {/* relativo aos textos */}
                <Typography
                    variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'} //diminui o texto com a tela
                    overflow='hidden' //corta o texto
                    whiteSpace='nowrap' //faz texto nao quebrar linha
                    textOverflow='elipses' //mostra tres pontinhos quando o texto nao couber
                >
                    {titulo}
                </Typography>
            </Box>

            {barraDeFerramentas && (
                <Box>
                    {barraDeFerramentas}
                </Box>
            )}

            {/* objeto dentro do layout de pagina // overflow auto coloca scroll só na div */}
            <Box flex={1} overflow='auto'>
                {children}
            </Box>
        </Box>
    );
};