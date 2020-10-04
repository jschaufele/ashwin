import React, { useState, useEffect } from "react";
import { BallBeat } from "react-pure-loaders";
import isEmpty from "lodash/isEmpty";
export function Loadingthrobber(props) {
	const hide = isEmpty(props) ? false : !!props.hide;
	const [show, setShow] = useState(false);
	useEffect(() => {
		setShow(!hide);
	}, [hide]);
	if (hide) return <></>;
	return (
		<>
			<style jsx>{`
				.loader {
					position: absolute;
					top: calc(50% - 4em);
					left: calc(50% - 4em);
				}
			`}</style>
			<div className="loader">
				<BallBeat color={"#000"} loading={show} />
			</div>
		</>
	);
}
