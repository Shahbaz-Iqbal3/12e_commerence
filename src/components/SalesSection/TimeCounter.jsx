import { useState, useEffect } from "react";

const SECOND = 1_000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export default function TimeCounter({deadline, interval = SECOND}) {
	const [timespan, setTimespan] = useState(new Date(deadline) - Date.now());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTimespan((_timespan) => _timespan - interval);
		}, interval);

		return () => {
			clearInterval(intervalId);
		};
	}, [interval]);

	/* If the initial deadline value changes */
	useEffect(() => {
		setTimespan(new Date(deadline) - Date.now());
	}, [deadline]);

	const time = {
		days: Math.floor(timespan / DAY),
		hours: Math.floor((timespan / HOUR) % 24),
		minutes: Math.floor((timespan / MINUTE) % 60),
		seconds: Math.floor((timespan / SECOND) % 60),
	};
	return (
		<>
			<div className="flex gap-2 sm:gap-4">
				<li className="flex flex-col items-start justify-start w-10 sm:w-auto">
					<span className="font-medium sm:tracking-wide">Days</span>
					<span className=" text-4xl sm:text-5xl font-bold font-sans">
						{time.days / 10 < 1 ? "0" + time.days : time.days}
					</span>
				</li>
				<span className="text-4xl font-bold mt-5 sm:mt-6 text-primary-0">:</span>
				<li className="flex flex-col items-start justify-start  w-10 sm:w-auto">
					<span className="font-medium sm:tracking-wide">Hour</span>
					<span className=" text-4xl sm:text-5xl font-bold font-sans">
						{time.hours / 10 < 1 ? "0" + time.hours : time.hours}
					</span>
				</li>
				<span className="text-4xl font-bold mt-5 sm:mt-6 text-primary-0">:</span>
				<li className="flex flex-col items-start justify-start w-10 sm:w-auto">
					<span className="font-medium sm:tracking-wide">Min</span>
					<span className=" text-4xl sm:text-5xl font-bold font-sans">
						{time.minutes / 10 < 1 ? "0" + time.minutes : time.minutes}
					</span>
				</li>
				<span className=" text-4xl font-bold mt-5 sm:mt-6 text-primary-0">:</span>
				<li className="flex flex-col items-start justify-start w-10 sm:w-auto">
					<span className="font-medium sm:tracking-wide">Sec</span>
					<span className=" text-4xl sm:text-5xl font-bold font-sans">
						{time.seconds / 10 < 1 ? "0" + time.seconds : time.seconds}
					</span>
				</li>
			</div>
		</>
	);
}
