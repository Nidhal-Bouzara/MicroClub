import React from 'react';

// StyleSheets
import cardStyle from '../styles/EventCard.module.scss';

// SVGs
import cardArrow from '../assets/FindMoreCardArrow.svg';
import bottomDec from '../assets/CardBottomDec.svg';


const Eventcard = ({img, text, handleClick, id}) => {
    return (
        <div className={cardStyle.container}>
            <div className={cardStyle.imgContainer}>
                <img src={img.img} className={cardStyle.img} alt={img.alt} />
            </div>
            <div>
                <h1 className={cardStyle.headline}>{text.headline}</h1>
                <p className={cardStyle.subheadline}>{text.subheadline}</p>
            </div>
            <div>
                <img src={bottomDec} className={cardStyle.bottomDec} alt="" />
                <h1 className={cardStyle.moreText} onClick={handleClick} data-id={id}>
                    Find Out More
                    <img src={cardArrow} className={cardStyle.cardArrow} alt="" />
                </h1>
            </div>
        </div>
    );
}

export default Eventcard;
