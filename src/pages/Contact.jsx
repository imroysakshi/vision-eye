import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1 class="section-header">Contact</h1>

        <div class="contact-wrapper">
          <form id="contact-form" class="form-horizontal" role="form">
            <div class="form-group">
              <div class="col-sm-12">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  value=""
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-12">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  value=""
                  required
                />
              </div>
            </div>

            <textarea
              class="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>

            <button
              class="btn btn-primary send-button"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div class="alt-send-button">
                <i class="fa fa-paper-plane"></i>
                <span class="send-text">SEND</span>
              </div>
            </button>
          </form>

          <div className="direct-contact-container">
            <ul class="contact-list">
              <li class="list-item">
                <i class="fa fa-map-marker fa-2x">
                  <span class="contact-text place">City, State</span>
                </i>
              </li>

              <li class="list-item">
                <i class="fa fa-phone fa-2x">
                  <span class="contact-text phone">
                   0621-222383
                  </span>
                </i>
              </li>

              <li class="list-item">
                <i class="fa fa-envelope fa-2x">
                  <span class="contact-text gmail" >
                   visionEyeWorkspace@gmail.com
                  </span>
                </i>
              </li>
            </ul>

            {/* <ul class="social-media-list">
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fa fa-codepen" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul> */}

      <div class="icons">
              <a href="https://t.co/VBNNTjtw3F" class="icon1 icon--instagram">
                <i class="ri-instagram-line"></i>
              </a>
              <a href="#" class="icon1 icon--twitter">
                <i class="ri-twitter-line"></i>
              </a>
              <a
                href="linkedin.com/in/brayan-ospina-8bb472243"
                class="icon1 icon--linkedin"
              >
                <i class="ri-linkedin-line"></i>
              </a>
              <a
                href="https://github.com/brayanospina2005/final-project"
                class="icon1 icon--github"
              >
                <i class="ri-github-line"></i>
              </a>
            </div>

            <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
