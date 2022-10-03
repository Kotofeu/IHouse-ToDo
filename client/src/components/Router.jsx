import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Contact from './pages/Contact.jsx';
import Task from './pages/Task.jsx';

import Header from './Header.jsx';
import { CONTACT_ROUTE, TASK_ROUTE } from '../utils/consts.js';

const Router = () => {
    const navlist =
        [
            { text: 'Список задач', link: TASK_ROUTE },
            { text: 'Контакты', link: CONTACT_ROUTE }
        ];
    return (
        <BrowserRouter>
            <Header props={navlist}></Header>
            <Routes>
                <Route path={CONTACT_ROUTE} element={<Contact />} />
                <Route path={TASK_ROUTE} element={<Task />} />
                <Route
                    path='*'
                    element={<Navigate to='/' replace />}
                />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;