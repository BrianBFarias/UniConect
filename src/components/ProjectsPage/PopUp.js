import React from "react";
import "./PopUp.css";
import { Link } from 'react-router-dom';

const PopUps = ({image, title, description, link, tech}) =>{

    return(
    <div className="box">
        <section className="image">
            <div className="image-box">
                <img src={image} alt="" />
            </div>
        </section>
        <section className="info-data">
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </section>
        <section className="tags">
            <div>
                {link !== '' && (
                    <Link
                        className='social-icon-link github'
                        to={link}
                        target='_blank'
                        aria-label='Instagram'
                    >
                        <i className="fa-brands fa-github" id="github"></i>
                    </Link>
                )}
            </div>
            <div>
                <p>{tech}</p>
            </div>
        </section>
    </div>);
}

export default PopUps;