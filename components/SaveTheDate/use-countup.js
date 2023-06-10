import { useEffect, useState } from "react";

export default function useCountup(date = "2023-06-05T07:30:00", countdownText) {
    const calculateTimeElapsed = (date) => {
        const difference = +new Date() - +new Date(date);
        let timeElapsed = { days: 0, hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeElapsed = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeElapsed;
    };

    const [timeElapsed, setTimeElapsed] = useState(calculateTimeElapsed(date));

    useEffect(() => {
        setTimeout(() => {
            setTimeElapsed(calculateTimeElapsed(date));
        }, 1000);
    });

    return (
        <>
            <div className="col">
                <div className="card card-body countdown-shadow mb-4 mb-lg-0 p-3 rounded-1rem">
                    <span className="counter text-primary mb-1 ">{timeElapsed.days}</span>{" "}
                    <span className="label ">{countdownText.day}</span>
                </div>
            </div>
            <div className="col">
                <div className="card card-body countdown-shadow mb-4 mb-lg-0 p-3 rounded-1rem">
                    <span className="counter text-primary mb-1 ">{timeElapsed.hours}</span>{" "}
                    <span className="label ">{countdownText.hour}</span>
                </div>
            </div>
            <div className="col">
                <div className="card card-body countdown-shadow mb-4 mb-lg-0 p-3 rounded-1rem">
                    <span className="counter text-primary mb-1 ">{timeElapsed.minutes}</span>{" "}
                    <span className="label ">{countdownText.minute}</span>
                </div>
            </div>
            <div className="col">
                <div className="card card-body countdown-shadow p-3 rounded-1rem">
                    <span className="counter text-primary mb-1">{timeElapsed.seconds}</span>{" "}
                    <span className="label">{countdownText.second}</span>
                </div>
            </div>
        </>
    );
}
