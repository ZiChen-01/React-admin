import React, { Component } from 'react';
import './index.css'
import home from "@/assets/home.png"

class Home extends Component {

    render() {
        const title = process.env.REACT_APP_TITLE

        return (
            <main>

                <div className='imgbox'> <img src={home} alt="" /></div>

                <p>欢迎登录{title}</p>
            </main>
        );
    }
}

export default Home;