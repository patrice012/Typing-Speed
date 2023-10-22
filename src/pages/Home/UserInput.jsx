export const UserInput = ({ handleInput }) => {
    return (
        <section className="mainContent--input">
            <input
                type="text"
                placeholder="Type here"
                className="input input-bordered "
                onChange={(e) => handleInput(e.target.value)}
            />
        </section>
    );
};