import React from "react";
import "./Contact.css";
import msg from "../../assets/msg-icon.png";
import mail from "../../assets/mail-icon.png";
import phone from "../../assets/phone-icon.png";
import loc from "../../assets/location-icon.png";
import wa from "../../assets/white-arrow.png";

const Contact = () => {
  //Web3Forms Script
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9ef31f5f-5f87-46fc-9ada-094d84e6e2ad");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  //web3Forms Script ends here

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a Message <img src={msg} alt="" />
        </h3>
        <p>
          If you have any questions, concerns, or feedback, please do not
          hesitate to reach out to us. We are here to help and look forward to
          hearing from you!
        </p>
        <ul>
          <li>
            <img src={mail} alt="" />
            omshree0709@gmail.com
          </li>
          <li>
            <img src={phone} alt="" />
            +91-9417512298
          </li>
          <li>
            <img src={loc} alt="" />
            Jaypee University of Information Technology (JUIT) Waknaghat, P.O.
            Waknaghat, Teh Kandaghat, Distt. Solan, Himachal Pradesh - 173234,
            India
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name ..."
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone Number ..."
            required
          />
          <label>Write Your Messages Here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit
            <img src={wa} alt="" />
          </button>
        </form>

        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
