import React from "react";
import './404.css'

export const  Error404=() =>{
    return (
        <div className='wrapper'>
            <div className="main">
                <div className="error">4</div>
                <i className="far fa-question-circle fa-spin"></i>
                <div className="error2">4</div>
                <div className="message">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in
                    the
                    first place?<p>Let's go <a href="/">home</a> and try from there.</p></div>
            </div>
        </div>
    );
}