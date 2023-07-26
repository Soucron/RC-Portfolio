import React from 'react';
import style from './Main.module.scss'
import {Slide} from 'react-awesome-reveal';
import Typed from 'typed.js';


const Main = () => {

    const el= React.useRef(null)

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Front-end Developer.'],
            typeSpeed: 90,
            loop: true,
            backSpeed: 50,
            startDelay: 500,
            backDelay: 1000
        });
        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <div className={style.mainBlock} id={'main'}>
            <div className={style.mainContainer}>
                <div className={style.text}>
                    <Slide direction={'right'}>
                    <span>About me</span>
                    </Slide>
                    <span ref={el} className={style.animSpan}/>
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