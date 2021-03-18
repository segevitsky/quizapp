import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./timer.css";

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            return <div className="timer">Too late...</div>;
        }

        return (
            <div className="timer">
                <div className="text">Remaining</div>
                <div className="value">{remainingTime}</div>
                <div className="text">seconds</div>
            </div>
        );
    };

function Timer({ timeOver, time, moveQuestion,unique }) {
	return (
		<div className="timer time-bar">
			<div className="timer-wrapper">
				<CountdownCircleTimer
                    key={unique}
					isPlaying
					duration={time}
					colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
					onComplete={() => {
                        moveQuestion('');
                        return [true, 500]
                        }}
				>
					{renderTime}
				</CountdownCircleTimer>
			</div>
		</div>
	);
}

export default Timer;
