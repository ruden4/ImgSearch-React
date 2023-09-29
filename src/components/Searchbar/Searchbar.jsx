import { useState } from "react";
import { toast } from 'react-toastify';

import css from './Searchbar.module.css'

export function Searchbar ({onSubmit}) {
const [value, setValue] = useState('')

    const handleInput = e => {
        const { value } = e.currentTarget;
        setValue(value);
    }
    const handleSubmit = e => {
        if (value.trim() === '') {
            toast.warn("Please write something! Don't be lazy...", {
                autoClose: 3000,
                hideProgressBar: true,
                theme: 'colored',
              });
            }
        e.preventDefault();
        onSubmit(value.trim().toLowerCase()); 
        setValue('');
      };
        return(
            <form className={css.form} onSubmit={handleSubmit}> 
                <input
                    onChange={handleInput}
                    value={value}
                    className={css.input}
                    type="text"
                />
                <button className={css.searchBtn}>Search</button>
             </form>
        )

}