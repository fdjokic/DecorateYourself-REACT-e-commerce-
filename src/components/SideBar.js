import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";
import { links } from "../constants/constants";
import { services } from "../constants/constants";
import { Link } from "react-router-dom";
import { BiUserPlus } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

const SideBar = () => {
  const { closeSideBar, isSidebarOpen } = useGlobalContext();
  return (
    <Wrapper>
      <aside className={isSidebarOpen ? "sidebar active" : "sidebar"}>
        <div className="sidebar-content">
          <Link to="/" onClick={closeSideBar}>
            <h5>Decorate Yourself</h5>
          </Link>
          <AiOutlineCloseCircle className="exit" onClick={closeSideBar} />

          {links.map((link) => {
            return (
              <Link
                to={link.url}
                key={link.id}
                className="link"
                onClick={closeSideBar}
              >
                {link.title}
              </Link>
            );
          })}
          <div className="icons">
            <BiUserPlus className="icon" />
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <BsCart4 className="icon" />
            </Link>
          </div>
        </div>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sidebar {
    display: none;
  }
  h5 {
    position: absolute;
    top: 2%;
    left: 2%;
    color: black;
  }
  @media only screen and (max-width: 1200px) {
  }
  @media only screen and (max-width: 992px) {
    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 100vw;
      z-index: -1;
      background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
      color: white;
      transform: translateY(100%);
      transition: 0.8s;
    }
    .active {
      transform: translateY(0);
      z-index: 999;
      transition: 0.8s;
    }
    h5 {
      font-size: 1.3rem;
      color: white;
    }
    .sidebar-content {
      text-decoration: none;
      font-size: 2.3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2.5rem;
    }
    .link {
      text-decoration: none;
      text-transform: capitalize;
      transition: 0.2s;
      color: white;
    }
    .link:hover {
      margin-left: 3rem;
      transition: 0.2s;
    }

    .icon {
      margin: 2rem 1rem;
      cursor: pointer;
      transition: 0.5s;
      color: white;
    }
    .icon:hover {
      transform: scale(1.2);
      transition: 0.5s;
    }
    .exit {
      position: absolute;
      top: 10%;
      cursor: pointer;
      transition: 0.5s;
      color: white;
    }
    .exit:hover {
      transform: rotate(180deg);
      transition: 0.5s;
    }
  }
  @media only screen and (max-width: 768px) {
  }
`;
export default SideBar;
