import React, { useState } from 'react';

const Contact = ({ data }) => {
   const [url, setUrl] = useState('mailto:test@example.com?subject=subject&body=body');
   const [name, setName] = useState('');
   const [subject, setSubject] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');

   console.log(data)

   const handleClick = (e) => {
      e.preventDefault();
   window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
   }

    return (
      <section id="contact">
         <h1>Get in touch</h1>
         <div className="contact-container">
            <div className="part1">
               <form id="contactForm" name="contactForm">
                  <fieldset>
                     <div>
                        <label htmlFor="contactName">Name <span className="required">*</span></label>
                        <input value={name} type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={e => setName(e.target.value)}/>
                     </div>

                     <div>
                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                        <input value={email} type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={e=> setEmail(e.target.value)}/>
                     </div>

                     <div>
                        <label htmlFor="contactSubject">Subject</label>
                        <input value={subject} type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={e => setSubject(e.target.value)}/>
                     </div>

                     <div>
                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)} cols="30" rows="0" id="contactMessage" name="contactMessage"></textarea>
                     </div>

                     <div>
                        <button type='submit' onClick={handleClick} className="submit">Submit</button>
                        <span id="image-loader">
                           <img alt="" src="images/loader.gif" />
                        </span>
                     </div>
                  </fieldset>
               </form>
               <div id="message-warning"> Error boy</div>
               <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
               </div>
            </div>

            <div className="part2">
               <h4>ADDRESS AND PHONE</h4>
               <p className="address">
                  {data?.name}<br />
                  {data?.address.city}, {data?.address.state} {data?.address.zip}<br />
                  <span>{data?.phone}</span>
               </p>
            </div>
         </div>
      </section>
   );
}

export default Contact;
