const Application = () => {
    return (
        <>
            <h1>Job Application Form</h1>
            <h2>Section 1</h2>
            <p>All fields are mendatory</p>
            <img src="" alt="A person with a laptop" />
            <span title="close">X</span>
            <div data-testid="custom-testId">Custom Element</div>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="FullName" defaultValue={"Mitesh"} />
                </div>
                <div>
                    <label htmlFor="bio">Bio</label>
                    <textarea id="bio" name="bio"></textarea>
                </div>
                <div>
                    <label htmlFor="job-location">Name</label>
                    <select id="job-location">
                        <option value={""}>Select a Country</option>
                        <option value={"US"}>Select a Country</option>
                        <option value={"IN"}>Select a Country</option>
                        <option value={"AU"}>Select a Country</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input type="checkbox" id="terms" /> I agree to terms and conditions
                    </label>
                </div>
                <button>Button</button>
            </form>
        </>
    )
}

export default Application