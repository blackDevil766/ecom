import React from "react"

function NewLetter(params) {
    return (
        <>
            <div className="newsLetter-container">
                <h2>Join Our Newsletter Now.<br />Up to 70% Off. All Sales are Final!</h2>
                <p>Subcribe to Beeta mailing list to receive update on new arrivals, special offers and other discount information.</p>
                <form action="#">
                    <input placeholder="Your email address" type="text" />
                        <button type="submit">Subscribe</button>
                </form>
            </div>
        </>
    )
}


export default NewLetter;
