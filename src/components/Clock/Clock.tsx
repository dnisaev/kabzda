import React, {useEffect, useState} from "react";
import styles from "./Clock.module.css";

type ClockPropsType = {
    mode: "digital" | "analog"
}

const get2digitsString = (num: number): string => num < 10 ? `0${num}` : `${num}`;

export const Clock = ({mode}: ClockPropsType) => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('tick');
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div>
            {
                mode === "digital"
                    ? <DigitalClockView date={date}/>
                    : <AnalogClockView date={date}/>
            }
        </div>
    )
}

type ClockViewPropsType = {
    date: Date
}

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
    </>
}

export const AnalogClockView: React.FC<ClockViewPropsType> = ({date}) => {

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };
    return <div className={styles.clock}>
        <div className={styles.analogClock}>
            <div className={`${styles.dial} ${styles.seconds}`} style={secondsStyle}/>
            <div className={`${styles.dial} ${styles.minutes}`} style={minutesStyle}/>
            <div className={`${styles.dial} ${styles.hours}`} style={hoursStyle}/>
        </div>
    </div>
}