import React from "react";
import "./ContactMe.css";
import Contactimg from "../../assets/Home/mailz.jpeg";
import { useState } from "react";
import { send } from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactMe() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
  });
  const [result, ShowResult]= useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_9m496da',
      'template_jnmkrdc',
      toSend,
      'gBxOpG8i-ERbd3lx5'
    )
      .then(
        (response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast("Your message is successfully sent to Simran via Mail, Thanks for contacting!");
        // swal({
        //   title: "Success",
        //   text: "Your message is successfully sent to Simran via Mail, Thanks for contacting!",
        //   icon: "success",
        //   button: "ok",
        // });
      },(err) => {
        console.log('FAILED...', err);
        toast("Failed to send your message to simran, Please try again later!");
        // swal({
        //   title: "Failure",
        //   text: "Failed to send your message to simran, Please try again later!",
        //   icon: "Failure",
        //   button: "ok",
        // });
      });
      e.target.reset();
      ShowResult(true);
      setToSend({
        from_name: "",
        message: "",})
      
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-container">
      <div className="contact-parent">
        <div className="heading-container">
          <div className="screen-heading">
            <span>Contact Me</span>
          </div>
          <div className="screen-sub-heading">
            <span>Let's Keep in Touch!</span>
          </div>
          <div className="heading-separater">
            <div className="separater-line"></div>
            <div className="separater-blob">
              <div></div>
            </div>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-text">
            <div className="get-touch">
              Get in Touch <i className="fa fa-envelope-o"></i>
            </div>
            <div className="colz">
              <div className="colz-icon">
                <a href="https://www.linkedin.com/in/simrann20/">
                  <i className="fa fa-linkedin-square"></i>
                </a>
                <a href="https://github.com/simranchawla20">
                  <i className="fa fa-github-square"></i>
                </a>
                <a href="https://www.instagram.com/simranchawla_20/">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="send-email">
              <span>Send Your Email Here!</span>
              <img src={Contactimg} />
            </div>
          </div>
          <div className="contact-form-card-container">
            <div className="contact-form-card">
              <form onSubmit={onSubmit}>
                <label>To:</label>
                <br></br>
                <input
                  type="text"
                  name="to_name"
                  placeholder="How you Call Simran?"
                  value="Simran"
                  onChange={handleChange}
                />
                <br></br>
                <label>From:</label>
                <br></br>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your name"
                  value={toSend.from_name}
                  onChange={handleChange}
                  required
                />
                <br></br>
                <label>Message</label>
                <br></br>
                <input
                  type="text"
                  name="message"
                  placeholder="Your message"
                  value={toSend.message}
                  onChange={handleChange}
                  required
                />
                <br></br>
                <button type="submit" className="btn primary-btn send-btn">Send <i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                <ToastContainer toastStyle={{ backgroundColor: "rgb(194, 218, 240)",color:"black" }}/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
