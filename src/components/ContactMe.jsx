function Contact() {
    return (
        // <p> Including Contact Information </p>
        <form className="form-position">
            <div className="form-section">
                <div className="form-title"> Reach Out! </div>
               <br></br>
                Name: 
                <input></input>
                <br></br>
                Email: 
                <input></input>
                <br></br>
                Message (optional): 
                <input ></input>
                {/* <br></br> */}
                <button className="form-sub-btn"> Submit </button>
            </div>
        </form>
    )
}

export default Contact