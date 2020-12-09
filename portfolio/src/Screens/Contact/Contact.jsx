import React from 'react'

export default function Contact() {
  return (
    <div>
      <form name="contact" action="/contact" method="post">
        <div>
          <h3>Contact Me</h3>
          <input type="hidden" name="form-name" value="contact"/>
          <label>Name 
            <input
              required
              type="text"
              name="name"
              placeholder="Your name"
            />
          </label>
          <label>Email 
            <input
              required
              type="text"
              name="email"
              placeholder="Email"
            />
          </label>
          <label>Message
            <textarea
              required
              type="text"
              name="message"
              placeholder="Message..."
              cols="30"
              rows="10"
            />
          </label>
        </div>
        <button type="submit">Send A Message</button>
      </form>
    </div>
  )
}
