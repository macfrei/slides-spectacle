import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
    <ol>
        <li> Week One:
          <ul>
            <li>
              <Link to="/weekOne/FirstSlide">First Slide</Link>
            </li>
          </ul>
        </li>
        <li> Week Two:
          <ul>
            <li>
              <Link to="/weekTwo/SecondSlide">Second Slide</Link>
            </li>
          </ul>
        </li>
        <li> Week Three:
        </li>
        <li> Week Four:
        </li>
        <li> Week Five:
        </li>
        <li> Week Six:
        </li>
        <li> Week Seven:
        </li>
        <li> Week Eight:
        </li>
        <li>
            <Link to="/">Home</Link>
        </li>
    </ol>
    )
}