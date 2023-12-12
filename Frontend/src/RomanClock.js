import React, { useEffect, useState } from 'react';
import './RomanClock.css'; // Make sure to create this CSS file

const RomanClock = () => {
    const [utcTime, setUtcTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
            setUtcTime(utc);
        }, 1000);

        return () => clearInterval(intervalId); // Clean up the interval
    }, []);

    const getHandRotation = (unit, division, offset = 0) => {
        return `rotate(${((utcTime[unit]() / division) * 360) + offset}deg)`;
    };

    return (
        <div className="clock">
            <div className="clock-face">
                {/* Render clock hands */}
                <div className="hand hour" style={{ transform: getHandRotation('getHours', 12, 90) }}></div>
                <div className="hand minute" style={{ transform: getHandRotation('getMinutes', 60, 90) }}></div>
                <div className="hand second" style={{ transform: getHandRotation('getSeconds', 60, 90) }}></div>

                {/* Render Roman numerals */}
                {['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'].map((numeral, index) => (
                <div key={numeral} className="numeral" style={{ transform: `rotate(${index * 30}deg)` }}>
                    <span style={{ transform: `rotate(${-index * 30}deg)` }}>{numeral}</span>
                </div>
            ))}
            </div>
        </div>
    );
};

export default RomanClock;
