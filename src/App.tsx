import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppThemeProvider, DrawerProvider } from './shared/contexts';
import { MenuLateral } from './shared/components';
import { BarraDeFerramentas } from './shared/components';

export const App = () => {
    return (
        <AppThemeProvider>
            <DrawerProvider>

                <BrowserRouter>
                    <MenuLateral>
                        <AppRoutes />
                        <BarraDeFerramentas />
                    </MenuLateral>
                </BrowserRouter>
            </DrawerProvider>
        </AppThemeProvider>
    );
};