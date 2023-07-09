import React from "react";
import "./AboutUs.css";
import saleem from "../images/saleem.jpeg";

export default function ProfileUser(props) {
  return (
    <div class="py-5 container">
      <div class="row  align-items-center h-100">
        <div class="col col-md-6 col-lg-7 col-xl-5">
          <div class="card cardWith">
            <div class="card-body p-2">
              <div class="d-flex text-black">
                <div class="flex-shrink-0">
                  <img
                    src={props.imageSrc}
                    alt="Generic placeholder image"
                    class="img-fluid user-image"
                  />
                </div>
                <div class="flex-grow-1 ms-5">
                  <h5 class="mb-1">{props.name}</h5>
                  <p class="mb-2 pb-1 text-name">{props.about}</p>
                  <div class="d-flex justify-content-start rounded-3 p-2 mb-2 text-name1">
                    <div>
                      <p class="small text-muted mb-1">Age</p>
                      <p class="mb-0">{props.age}</p>
                    </div>
                    <div class="px-3">
                      <p class="small text-muted mb-1">RegNo</p>
                      <p class="mb-0">{props.regNo}</p>
                    </div>
                    {/* <div>
                      <p class="small text-muted mb-1">Rating</p>
                      <p class="mb-0">8.5</p>
                    </div> */}
                  </div>
                  <div class="d-flex pt-1">
                    <button
                      type="button"
                      class="btn btn-outline-primary me-1 flex-grow-1"
                    >
                      LinkedIn
                    </button>
                    <button type="button" class="btn btn-primary flex-grow-1">
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
