import React from 'react';
import style from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <h2>Contacts</h2>
                <form className={style.contactsForm}>
                    <input/>
                    <input/>
                    <textarea/>
                </form>
                <button>Enter</button>
            </div>

        </div>
    );
};

export default Contacts;