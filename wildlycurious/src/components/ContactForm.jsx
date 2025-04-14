import React, { useState } from "react";

const ContactForm = () => {
    const [result, setResult] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const json = await response.json();

            if (json.success) {
                setResult("Message sent successfully!");
                event.target.reset();
            } else {
                setResult("Error: Message was unable to be sent.");
            }
        } catch (error) {
            setResult("Network error, try again later.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value="891af433-d694-40e6-b7e6-3ab5be8e675c" />

            <p>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </p>

            <p>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </p>

            <p>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
            </p>

            <input type="checkbox" name="botcheck" style={{ display: "none" }} />

            <p>
                <button type="submit">Submit Form</button>
            </p>

            <p>{result}</p>
        </form>
    );
};

export default ContactForm;
