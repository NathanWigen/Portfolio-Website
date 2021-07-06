import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div>
      <form name="contact" action="/contact" method="post">
        <div>
          <div className="contact-title">
            <h3>Contact Me</h3>
          </div>
          <div className="contact-form">
            <input type="hidden" name="form-name" value="contact"/>
            <div className="labels-div">
              <div className="label-title">
                <label>Your Name</label>
              </div>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder=" Your Name"
                  className="input"
                />
            </div>
            <div className="labels-div">
              <div className="label-title">
                <label>Your Email</label>
              </div>
                <input
                  required
                  type="text"
                  name="email"
                  placeholder=" Email"
                  className="input"
                />
            </div>
            <div className="labels-div">
              <div className="message-title">
                <label>Your Message</label>
              </div>
                <textarea
                  required
                  type="text"
                  name="message"
                  placeholder=" Message..."
                  cols="100"
                  rows="5"
                  className="text-area"
                />
              </div>
          </div>
        </div>
        <button type="submit" className="send-button">Send a Message</button>
      </form>
    </div>
  )
}
