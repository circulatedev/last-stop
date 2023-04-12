import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ConversationList from './ConversationList';
// import { useConversationDispatch } from '../contexts/ConversationContext';
// import { newConversation } from '../services/ConversationAPI';
import { useNewConversationMutation } from '../services/ConversationAPI';

function Navbar() {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // const conversationDispatch = useConversationDispatch();
  const [newConversation, conversation] = useNewConversationMutation();

  const startNewConversation = async () => {
    // conversationDispatch({
    //   type: 'newConversation',
    //   payload: { id: '', userId: '', messages: []}
    // })
    // await newConversation({});
    window.location.reload();
  }

  return (

    <div>
      <div className="md:h-screen md:border-r bg-white">

        <div className="px-4 py-6 flex flex-col">
          <nav aria-label="Main Nav" className="">

            <div className="hidden sm:block">
              <div className="px-10 py-5 flex flex-col">
                <div className='justify-center items-center object-fill bg-opacity-0 mb-2'>
                  <img src={logo} alt='logo'/>
                </div>
              </div>
              <a
                onClick={startNewConversation}
                href="#" 
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faRotateLeft} />
                <span className="text-md font-medium"> New conversation </span>
              </a>

              <a
                href="https://github.com/circulatedev/last-stop" 
                target="_blank"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span className="text-md font-medium"> Last Stop </span>
              </a>
              <ConversationList/>
            </div>


            <div className='sm:hidden flex flex-1 justify-end items-center'>
              <FontAwesomeIcon className='w-[2rem] h-[2rem] object-contain' icon={faBars} />

              <div
                className={`${
                  !toggle ? "hidden" : "flex"
                } p-6 bg-primary border-2 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-15 rounded-xl`}
              >
                <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                  <li
                    key={"hi"}
                    className={`font-medium cursor-pointer text-[1.2rem] ${
                      active === "HI" ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive("HI");
                    }}
                  >
                    <a href={`#hi`}>{"HI"}</a>
                  </li>
                </ul>
              </div>
            </div>

          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
