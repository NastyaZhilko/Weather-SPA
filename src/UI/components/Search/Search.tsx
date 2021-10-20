import React, {ChangeEvent, FC} from "react";
import style from "../../Pages/SidePage/SidePage.module.css";

type PropsType = {
    inputFieldError: (e: ChangeEvent<HTMLInputElement>) => void
    value: string
    changeInput: (e: ChangeEvent<HTMLInputElement>) => void
    inputError: boolean
    getWeather: () => void
}
export const Search: FC<PropsType> = ({
                                          inputFieldError,
                                          value,
                                          changeInput,
                                          inputError,
                                          getWeather
                                      }) => {
    return (
        <div className={style.form}>
            <input type="text"
                   name="city"
                   placeholder="City name"
                   title="Use latin letters!"
                   pattern="^[a-zA-Z\s]+$"
                   onBlur={inputFieldError}
                   value={value}
                   onChange={changeInput}
            />
            <button className={style.btn} disabled={!value || inputError}
                    onClick={getWeather}>
                Get weather
            </button>
            {inputError && <div style={{color: 'yellow', fontSize: '18px'}}>
                Use latin letters!
            </div>}
        </div>
    )
}