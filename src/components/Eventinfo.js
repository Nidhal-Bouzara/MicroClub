import React from 'react';

// Styles
import eventStyle from '../styles/Eventinfo.module.scss';

// SVGs 
import infoCardBottomDec from '../assets/InfoCardBottomDec.svg';
import infoCardTopDec from '../assets/InfoCardTopDec.svg';
import goBack from '../assets/goBack.svg';

const Eventinfo = (props) => {

    const imgStyle = {
        position: "absolute",
        ...props.data.styling,
        zIndex: "-1"
    }

    const bottomDecStyle = {
        position: "absolute",
        bottom: "0rem",
        left: "13.62rem",
        zIndex: "-2"

    }

    if (props.data.bottomDec) {
        bottomDecStyle.left = "0rem";
    }

    return (
        <div className={eventStyle.displayContainer}>
            <div className={eventStyle.goBackContainer} onClick={props.callback}>
                <img src={goBack} className={eventStyle.goBack} alt="" />
            </div>
            <h1 className={eventStyle.title}>{props.data.title}</h1>
            <div className={eventStyle.info}>
                <p>{props.data.description}</p>
            </div>
            <img src={props.data.bottomDec || infoCardBottomDec} style={bottomDecStyle} alt="" />
            <img src={infoCardTopDec} className={eventStyle.topDec} alt="" />
            <div style={imgStyle}>
                <img src={props.data.img} className={eventStyle.img} alt="" style={props.data.imgInStyle != undefined? props.data.imgInStyle : null} />
            </div>
        </div>
    );
}

export default Eventinfo;
