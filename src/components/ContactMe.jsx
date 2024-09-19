function Contact() {
    return (
        // <p> Including Contact Information </p>
        <form className="form-position">
            <div className="form-section">
                <div className="form-title"> Reach Out! </div>
                <div className="email-contact">Jaua1150@gmail.com </div>
               <br></br>
                Name: 
                <input type="name" required ></input>
                <br></br>
                Email: 
                <input type="email" required ></input>
                <br></br>
                Message: 
                <input type="text"required ></input>
                {/* <br></br> */}
                <button className="form-sub-btn"> Submit </button>
            </div>
        </form>
    )
}

export default Contact