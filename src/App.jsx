import React from 'react';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import './App.css'

function App() {
    return (
        <Layout>
            <Header />
            <Body />
            <Footer />
        </Layout>
    );
}

export default App;
