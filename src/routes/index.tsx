import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import { Dashboard } from '../pages';
// define as rotas da aplicação
export const AppRoutes = () => {
    const {setDrawerOptions} = useDrawerContext();

    // item de menu
    useEffect(() => {
        setDrawerOptions([
            {
                path: '/pagina-inicial',
                icon: 'home',
                label: 'Página Inicial'
            },
            {
                path: '/login',
                icon: 'lock',
                label: 'Login'
            },
            {
                path: '/cadastro',
                icon: 'person-add',
                label: 'Cadastro'
            }
        ]);
    }, []);


    return (
        //configuracao de rotas
        <Routes>
            <Route path='/pagina-inicial' element={<Dashboard/>} />
            <Route path='/login' element={<Dashboard/>} />
            <Route path='/cadastro' element={<Dashboard/>} />

            <Route path='/agua' element={<Dashboard/>} />
            <Route path='/exercicios' element={<Dashboard/>} />
            <Route path='/alimentacao' element={<Dashboard/>} />

            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    );
};