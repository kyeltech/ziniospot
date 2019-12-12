import React from 'react'

import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import './MyStyle.css'


class Apps extends React.Component{
    render() {
        return (
            <div>
                <Header />
                <MainContent />
                <Footer />
    
            </div>
        )
    }

}
export default Apps