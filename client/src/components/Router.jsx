import React from 'react'
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom'
import Contact from './pages/Contact.jsx';
import Task from './pages/Task.jsx';
import Archive from './pages/Archive.jsx';

import Header from './Header.jsx';

export default function Router() {
    const navlist =
        [
            { text: 'Список задач', link: '/' },
            { text: 'Архив', link: '/archive' },
            { text: 'Контакты', link: '/contact' }
        ]
    return (
        <BrowserRouter>
            <Header props={navlist}></Header>
            <Routes>
                <Route path='/contact' element={<Contact />} />
                <Route path='/archive' element={<Archive />} />
                <Route path='/' element={<Task />} />
                <Route
                    path="*"
                    element={<Navigate  to="/" replace />}
                />
            </Routes>
        </BrowserRouter>
    )
}
