import React from 'react';
import style from './Main.module.scss'

const Main = () => {
    return (
        <div className={style.mainBlock} id={'main'}>
            <div className={style.mainContainer}>
                <div className={style.text}>
                    <span>About me</span>
                    <h1>Front-end Developer </h1>
                    <p>Hello there! I'm Pavel, a front-end developer from Minsk. I'm specialized in creating dynamic and interactive web applications. With a passion for crafting clean and efficient code, I transform design concepts into functional websites that captivate users.  </p>
                    <p>Leveraging my expertise in HTML, CSS, and JavaScript, I strive to build seamless user interfaces that not only meet client objectives but also provide an enjoyable browsing experience. From responsive layouts to optimized performance, I focus on delivering high-quality websites that blend aesthetics with functionality.</p>
                    <p>Take a look at my portfolio to explore some of my past projects and see how I can help bring your vision to life.</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};

export default Main;