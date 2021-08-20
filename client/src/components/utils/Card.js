import React, { useState } from "react"
import { Link } from "gatsby"
import ImageSlider from "./ImageSlider"
import Popup from "./Popup"

import { BiLink } from "react-icons/bi"
import { AiFillCloseCircle } from "react-icons/ai"

const Card = props => {
  const [pop_up_state, toggle_pop_up_state] = useState(false)
  const pop_up = document.querySelector(".pop_up")
  const close_pop_up = document.querySelector(".close_pop_up")
  const open_pop_up = document.querySelector(".open_pop_up")

  return (
    <div className="card">
      <div className="card_child_container_one">
        <div className="card_logo_container">
          <img className="card_logo" src={props.logo} />
        </div>

        <div className="card_grandchild_container">
          <div className="card_title_container">
            <h2 className="card_title">{props.title}</h2>
          </div>
          <div className="card_snippet_container">
            <p className="card_snippet">{props.snippet}</p>
          </div>
        </div>
      </div>
      <div>
        <button
          className="button_style_one"
          onClick={() => {
            toggle_pop_up_state(true)
          }}
        >
          View
        </button>
        <Popup
          pop_up_state={pop_up_state}
          toggle_pop_up_state={toggle_pop_up_state}
        >
          <div className="card_pop_up_toolbar">
            <div>
              <button
                className="close_pop_up_icon"
                onClick={() => {
                  toggle_pop_up_state(false)
                }}
              >
                <AiFillCloseCircle />
              </button>
            </div>
          </div>
          <div className="card_pop_up_header">
            <div className="card_pop_up_header_child">
              <div className="card_pop_up_title_container">
                <div>
                  <h2 className="card_pop_up_title">{props.title}</h2>
                </div>
                <div className="card_pop_up_link_container">
                  <Link
                    className="card_pop_up_link"
                    target="_blank"
                    to="https://www.hauseofbrands.com/"
                  >
                    <BiLink />
                  </Link>
                </div>
              </div>
              <div className="card_snippet_container">
                <p className="card_snippet">{props.snippet}</p>
              </div>
              <div className="card_pop_up_technologies_container">
                <div className="card_pop_up_technologies_title">Tech Used:</div>
                <div className="card_pop_up_technologies">
                  {props.technologies.map(technology => (
                    <div className="card_pop_up_technologies_span">
                      {technology}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="card_pop_up_image_container">
            <ImageSlider slides={props.slides} />
          </div>
          <div>
            <p className="card_pop_up_description">{props.description}</p>
          </div>
        </Popup>
      </div>
    </div>
  )
}

export default Card
