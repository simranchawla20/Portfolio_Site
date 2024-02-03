import React from 'react'
import './Interests.css'

export default function Interests() {
  return (
    <div className='int-container'>
        <div className='int-parent'>
        <div className="int-rw">
            <div className="int-interest">
                <span className="orange">
                <i class="fa fa-circle" aria-hidden="true"></i>Teaching
                </span>
                <span className="int-dtl" style={{ "margin-left": "20px", "font-size": 13 }}>
                Apart from being a tech enthisiast and a code writer, i also love to teach people what i know and learn from people simply because i believe in sharing. 
                </span>
            </div>
            </div>
            <div className="int-rw">
            <div className="int-interest">
                <span className="orange">
                <i class="fa fa-circle" aria-hidden="true"></i>Playing
                </span>
                <span className="int-dtl" style={{ "margin-left": "20px", "font-size": 13 }}>
                  Playing indoor and outdoor games is one of my fav things to do and its also increases mind and body co-ordination.
                </span>
            </div>
            </div>
            <div className="int-rw">
            <div className="int-interest">
                <span className="orange">
                <i class="fa fa-circle" aria-hidden="true"></i>Exploring Places
                </span>
                <span className="int-dtl" style={{ "margin-left": "20px", "font-size": 13 }}>
                  I love Exploring New places and things to just enjoy our beautiful life.
                </span>
            </div>
          </div>
        </div>
    </div>
  )
}
