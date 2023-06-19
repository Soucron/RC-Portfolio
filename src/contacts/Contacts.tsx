import React from 'react';
import style from './Contacts.module.css'
import {MyContacts} from './mycontacts/MyContacts';

const Contacts = () => {
    return (
        <div className={style.contactsBlock} id={'contacts'} >
            <div className={style.contactsContainer}>
                <h2>Contacts</h2>
                <div className={style.contactsInfoForm}>
                    <MyContacts/>
                    <form className={style.contactsForm}>
                        <h2>Write me a message</h2>
                        <input type={'text'} placeholder={'Name*'} className={style.holders} />
                        <input type={'email'} placeholder={'Email*'} className={style.holders} />
                        <textarea placeholder={'Type your message here*'} className={style.holders}/>
                        <button className={style.contactsButton}>SEND MESSAGE</button>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Contacts;