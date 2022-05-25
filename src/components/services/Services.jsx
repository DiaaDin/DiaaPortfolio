import React from "react";
import styled from "styled-components";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineMobile } from "react-icons/ai";
import { FaLaptopHouse, FaLaptopCode } from "react-icons/fa";
import { MdModeEdit, MdOutlineBrush } from "react-icons/md";
import ParagraphText from "../paragraphText/ParagraphText";
import SectionTitle from "../titles/SectionTitle";

const Section = styled.section`
  padding: 10rem 0;

  .MainTitle {
    text-align: center;
  }
  .PSection {
    text-align: center;
    margin-bottom: 5rem;
    font-weight: 500;
  }

  .container {
    display: flex;
    justify-content: center;
    width: 90%;
    flex-wrap: wrap;
    text-transform: capitalize;

    .row {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      .boxcontainer {
        .box {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          height: 25rem;
          width: 25rem;
          background: #eeeeee;
          text-align: center;
          margin: 2rem;
          border-radius: 10px;
          transition: all 0.3s ease-in-out;
          box-shadow: 2px 1px 4px 1px rgba(0, 0, 0, 0.11);
          position: relative;

          @media only screen and (max-width: 991px) {
            height: 20rem;
            width: 20rem;
          }
          @media only screen and (max-width: 768px) {
            height: 16rem;
            width: 25rem;
          }

          h2 {
            color: var(--maincolor);
            font-size: 2rem;
            transition: all 0.3s ease-in-out;
            @media only screen and (max-width: 768px) {
              font-size: 1.5rem;
            }
          }
          svg {
            transition: all 0.3s ease-in-out;
            width: 6rem;
            height: 6rem;
            margin-bottom: 1rem;
            color: var(--maincolor);

            @media only screen and (max-width: 768px) {
              width: 5rem;
              height: 5rem;
            }
          }
          &:hover svg {
            color: var(--seccolor);
          }
          &:hover {
            background-color: var(--maincolor);
          }
          &:hover h2 {
            color: var(--seccolor);
          }
        }
      }
    }
  }
`;

const Services = () => {
  return (
    <Section id="Services" data-scroll-section>
      <SectionTitle className="MainTitle">Services</SectionTitle>
      <ParagraphText className="PSection">
        Try Once, You will <strong>BACK</strong> over and over
      </ParagraphText>
      <div className="container">
        <div className="row">
          <div className="boxcontainer">
            <div className="box">
              <FaLaptopCode />
              <h2>front-end</h2>
            </div>
          </div>
          <div className="boxcontainer">
            <div className="box">
              <BsCodeSlash />
              <h2>developer</h2>
            </div>
          </div>
          <div className="boxcontainer">
            <div className="box">
              <MdModeEdit />
              <h2>clean code</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="boxcontainer">
            <div className="box">
              <AiOutlineMobile />
              <h2>responsive</h2>
            </div>
          </div>
          <div className="boxcontainer">
            <div className="box">
              <MdOutlineBrush />
              <h2>designer</h2>
            </div>
          </div>
          <div className="boxcontainer">
            <div className="box">
              <FaLaptopHouse />
              <h2>free lancing</h2>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
