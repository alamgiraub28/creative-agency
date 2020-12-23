import React from 'react';
import Header from './Header/Header';
import HeaderContent from './Header/HeaderContent';
import ClientList from './ClientList/ClientList';
import OurServices from './OurServices/OurServices';
import OurWorks from './OurWorks/OurWorks';

const Home = () => {
    return (
        <div style={{"background":"#E5E5E5"}}>
        <Header></Header>
        <HeaderContent></HeaderContent>
        <ClientList></ClientList>
        <OurServices></OurServices>
        <OurWorks></OurWorks>
        </div>
    );
};

export default Home;