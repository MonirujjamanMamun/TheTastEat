import React from 'react';

const Reservation = () => {
  return (
    <div class="reservation-section">
      <div class="container w-container">
        <div class="reservation-wrap">
          <div class="section-title-wrap">
            <div class="section-subtitle-wrap">
              <p class="section-subtitle subtitle-white">reservation</p>
            </div>
            <h3 class="section-title title-white">Book Your Table</h3>
          </div>
          <div class="reservation-block w-form">
            <form
              id="book-table-form"
              name="email-form"
              data-name="Email Form"
              method="get"
              data-wf-page-id="622856f73bdd0ff64f741cb4"
              data-wf-element-id="973e2cf9-99d6-fe5d-3766-b052d8c68645"
            >
              <div class="form-input-wrap">
                <input
                  class="input-field half-width w-input"
                  maxlength="256"
                  name="name-2"
                  data-name="Name 2"
                  placeholder="Name"
                  type="text"
                  id="name-2"
                />
                <input
                  class="input-field half-width w-input"
                  maxlength="256"
                  name="email-2"
                  data-name="Email 2"
                  placeholder="Email"
                  type="email"
                  id="email-2"
                  required=""
                />
              </div>
              <div class="form-input-wrap">
                <input
                  class="input-field quarter-width w-input"
                  maxlength="256"
                  name="Date"
                  data-name="Date"
                  placeholder="Persons"
                  type="text"
                  id="Persons"
                  required=""
                />
                <input
                  class="input-field quarter-width w-input"
                  maxlength="256"
                  name="Timing-2"
                  data-name="Timing 2"
                  placeholder="Timing"
                  type="text"
                  id="Timing-2"
                />
                <input
                  class="input-field quarter-width w-input"
                  maxlength="256"
                  name="Date-2"
                  data-name="Date 2"
                  placeholder="Date"
                  type="text"
                  id="Date-2"
                  required=""
                />
              </div>
              <input
                type="submit"
                data-wait="Please wait..."
                class="submit-button form-submit-button w-button"
                value="Book A Table"
              />
            </form>
            <div class="success-message w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div class="error-message w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
