import React from "react";

import styled from "styled-components";
const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Get in touch</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30165.669547783393!2d72.97796036125857!3d19.076541356174754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c136b519107b%3A0x8452b99754be0fc8!2sVashi%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1681712390595!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

        <div className="container">
          <div className="contact-form">
            <form action="#" method="POST" className="contact-inputs">
              <input type="text" placeholder="name" name="name" autoComplete="Off" required/>
              <input type="email" placeholder="email" name="email" autoComplete="Off" required/>
              <textarea cols="30" rows="6"autoComplete="off"
              required></textarea>
              <input type="submit" value="Send"/>
            </form>
          </div>
        </div>
    </Wrapper>
  );
};

export default Contact;
