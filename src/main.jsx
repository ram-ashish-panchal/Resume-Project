import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Contact from './component/Contact.jsx';
import Data from './component/Data.jsx';

import Services from './component/Services.jsx';
import Basic from './component/Basic.jsx';
import Edit from './component/Edit.jsx';

import Template1 from './Templates/template1.jsx';
import Skills from './component/Skils.jsx';
import Creator from './AboutCreator/Creator.jsx';

const Myroutes = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/contentcreator" element={<Creator />} />
            <Route path="/" element={<Basic />} />
            <Route path="/data" element={<Data />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/template1" element={<Template1 />} />
        </>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={Myroutes}>
            <Basic />
        </RouterProvider>
    </Provider>
);
