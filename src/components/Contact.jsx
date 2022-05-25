import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import SectionTitle from "./titles/SectionTitle";
import { BsFillCheckCircleFill } from "react-icons/bs";
const Section = styled.section`
  .MainTitle {
    text-align: center;
  }
`;
const Div = styled.div`
  width: 90%;
  max-width: 700px;
  margin: 0 auto;
  margin-top: 5rem;
  ul {
    padding: 0;
    margin: 0;
    label {
      padding: 0;
      list-style: none;
      font-size: 2rem;
      margin: 2rem 0;
      overflow: hidden;
      display: block;
      clear: both;
      input {
        &::placeholder {
          color: #b9b9b9bd;
          font-size: 1.5rem;
        }
      }

      &.half {
        width: 49%;
        margin-left: 2%;
        float: left;
        clear: none;
        &:first-child {
          margin-left: 0;
        }
        &:nth-child(3) {
          margin-left: 0;
        }
      }
    }
    input[type="text"],
    input[type="email"] {
      width: 100%;
      border: none;
      height: 50px;
      font-size: 2rem;
      color: var(--maincolor);
      padding: 0 1rem;
      outline: none;
      font-family: "Josefin Sans";
      margin-top: 1rem;
    }
    textarea {
      width: 100%;
      border: none;
      height: 150px;
      padding: 1rem;
      margin-top: 1rem;
      color: var(--maincolor);
      font-size: 2rem;
      outline: none;
      font-family: "Josefin Sans";
      &::placeholder {
        color: #b9b9b9bd;
        font-size: 1.5rem;
      }
    }
    .btn {
      display: inline-block;
      background-color: Transparent;
      padding: 0.5rem 1.7rem;
      color: #eeeeee;
      font-size: 2rem;
      text-transform: capitalize;
      font-weight: 400;
      cursor: pointer;
      background-color: var(--maincolor);
      border: none;
      outline: none;
      font-family: "Josefin Sans";
    }
  }
`;
const SuccessfulDiv = styled.div`
  position: absolute;
  z-index: 1000;
  width: 65rem;
  height: 65rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  svg {
    width: 15rem;
    height: 15rem;
    color: #8bdb81;
    margin-bottom: 2rem;
  }
  h2 {
    color: #eeeeee;
  }
`;
const Successful = () => (
  <SuccessfulDiv>
    <BsFillCheckCircleFill />
    <h2>Message Send Successfully</h2>
  </SuccessfulDiv>
);

const Contact = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_s15a0nv",
        "template_1behgl2",
        refForm.current,
        "UggKO-sWBoKjYvMak"
      )
      .then(
        () => {
          alert("Your Message Send Successfully");
        },
        () => {
          alert("Faild to Send Message ,Try Again");
        }
      );
  };

  return (
    <Section data-scroll-section>
      <SectionTitle className="MainTitle">Contact</SectionTitle>
      <Div>
        <form ref={refForm} onSubmit={sendEmail}>
          <ul>
            <label className="half" htmlFor="user_name">
              Name
              <input
                type="text"
                name="user_name"
                id="user_name"
                placeholder="Diaa Zahran"
                required
              />
            </label>
            <label className="half" htmlFor="user_email">
              Email
              <input
                type="email"
                name="user_email"
                id="user_email"
                placeholder="DiaaDin@Example.com"
                required
              />
            </label>
            <label htmlFor="subject" className="half">
              Subject
              <input
                placeholder="Subject"
                type="text"
                name="subject"
                id="subject"
                required
              />
            </label>
            <label htmlFor="user_phone" className="half">
              Phone - Optional
              <input
                placeholder="+20 10 111 222 33"
                type="text"
                name="user_phone"
                id="user_phone"
              />
            </label>
            <label htmlFor="message">
              Message
              <textarea
                placeholder="Message"
                name="message"
                id="message"
                required
              ></textarea>
            </label>
            <li>
              <input type="submit" value="Send" className="btn" />
            </li>
          </ul>
        </form>
      </Div>
    </Section>
  );
};

export default Contact;
