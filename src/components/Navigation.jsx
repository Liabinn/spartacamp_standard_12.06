import React from 'react'
import { Link } from 'react-router-dom'

const NAVIGATION = [
  {
    id: "1",
    url: "/user/1",
    name: "User 1"
  },
  {
    id: "2",
    url: "/user/2",
    name: "User 2"
  },
  {
    id: "3",
    url: "/user/3",
    name: "User 3"
  },
  {
    id: "4",
    url: "/search",
    name: "Search"
  },
  {
    id: "5",
    url: "/auth/page1",
    name: "Auth Page 1"
  },
  {
    id: "6",
    url: "/auth/page2",
    name: "Auth Page 2"
  },
  {
    id: "7",
    url: "/testpage",
    name: "테스트 페이지"
  },
]

function Navigation() {
  return (
    <nav>
      <ul>
        {
          NAVIGATION.map(menu => {
            return (<li>
              <Link to={`${menu.url}`}>{menu.name}</Link>
            </li>)
          })
        }
      </ul>
    </nav>
  )
}

export default Navigation