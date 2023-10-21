export const CountDown = () => {
    return (
        <div className="countdown--container">
            {/* <div>
                <span className="countdown font-mono text-4xl">
                    <span style={{ "--value": 12 }}></span>
                </span>
                Hours
            </div>
            <div>
                <span className="countdown font-mono text-4xl">
                    <span style={{ "--value": 44 }}></span>
                </span>
                Minutes
            </div> */}
            <div>
                <span className="countdown text-3xl">
                    <span style={{ "--value": 17 }}></span>
                </span>
                sec
            </div>
        </div>
    );
};
