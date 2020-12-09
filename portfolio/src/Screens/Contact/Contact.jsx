import React from 'react'

export default function Contact() {
  return (
    <div>
      <form name="contact" method="POST" data-netlify="true">
        <div>
          <h3>Contact Me</h3>
          <label>Name 
            <input
              type="text"
              name="name"
              placeholder="Your name"
            />
          </label>
          <label>Email 
            <input
              type="text"
              name="email"
              placeholder="Email"
            />
          </label>
          <label>Message
            <textarea
              type="text"
              name="message"
              placeholder="Message..."
            />
          </label>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}
