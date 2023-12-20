import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './mainPage';
import Calender from './calender';
import Setting from './setting';

const AppRounter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/calender" element={<Calender/>} />
            <Route path="/setting" element={<Setting />} />
        </Routes>
    </BrowserRouter>
);