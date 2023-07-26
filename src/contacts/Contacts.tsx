import React from 'react';
import style from './Contacts.module.scss'
import {MyContacts} from './mycontacts/MyContacts';
import {Slide} from 'react-awesome-reveal';

const Contacts = () => {
    return (
        <div className={style.contactsBlock} id={'contacts'} >
            <div className={style.contactsContainer}>
                <h2>Contacts</h2>
                <div className={style.contactsInfoForm}>
                    <Slide direction={'left'} triggerOnce={true}>
                    <MyContacts/>
                    </Slide>
                    <Slide direction={'right'} triggerOnce={true}>
                    <form className={style.contactsForm}>
                        <h2>Write me a message</h2>
                        <input type={'text'} placeholder={'Name*'} className={style.holders} />
                        <input type={'email'} placeholder={'Email*'} className={style.holders} />
                        <textarea placeholder={'Type your message here*'} className={style.holders}/>
                        <button className={style.contactsButton}>SEND MESSAGE</button>
                    </form>
                    </Slide>
                </div>

            </div>

        </div>
    );
};

export default Contacts;