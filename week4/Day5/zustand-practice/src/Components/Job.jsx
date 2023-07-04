import React from "react";
import photo from "../../src/assets/images/photosnap.png";

const Job = ({
  dep,
  logo,
  isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => 
{
  return (
    //  Card-One
    <>
      <div className="container">
        <div className="container-logo">
          <img
            src={logo}
            alt=""
            srcset=""
            width={100}
            height={100}
            id="logoImg"
          />
        </div>
        <div className="sub-container">
          <div className="sub-sub-container1">
            <ul className="first-list">
              <li>{dep}</li>
              <li>{isNew ? 'New!' : ''}</li>   
            <li>{featured ? 'Featured' : ''}</li>
            </ul>
            <ul className="second-list">
              <li>{position}</li>
            </ul>
            <ul className="third-list">
              <li>{postedAt}</li>
              <li>{contract}</li>
              <li>{location}</li>
            </ul>
          </div>
          <div className="sub-sub-container2">
            <ul className="sub-2-list">
              <li> {role}</li>
              <li>{level}</li>
              {languages.map((lang) => {
                return <li>{lang}</li>;
              })}

              <li>{tools}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* // Card-2 */}
      {/* <div className='container'>
                      <div className='container-logo'>
                       
                  <img src={photo} alt="" srcset="" width={100} height={100}   id='logoImg' />
                  
                  
                      </div>
                      <div className='sub-container'>
                        <div className='sub-sub-container1'>
                          <ul className='first-list'>
                            <li>Manage</li>
                            <li>New!</li>
                            <li>Featured</li>
                          </ul>
                          <ul className='second-list'>
                            <li>Full Stack Developer</li>
                          </ul>
                          <ul className='third-list'>
                            <li>1 day ago</li>
                            <li>Part Time</li>
                            <li>Remote</li>
                          </ul>
                  
                        </div>
                        <div className='sub-sub-container2'>
                          <ul className='sub-2-list'>
                            <li>Frontend Senior</li>
                            <li>Senior</li>
                            <li>Html</li>
                            <li>Css</li>
                            <li>JavaScript</li>
                          </ul>
                        </div>
                      </div>
                     </div>
                      {/* // Card-3 */}
      {/* <div className='container'>
                      <div className='container-logo'>
                       
                  <img src={photo} alt="" srcset="" width={100} height={100}   id='logoImg' />
                  
                  
                      </div>
                      <div className='sub-container'>
                        <div className='sub-sub-container1'>
                          <ul className='first-list'>
                            <li>Account</li>
                            <li>New!</li>
                            <li>Featured</li>
                          </ul>
                          <ul className='second-list'>
                            <li>Juinor Frontend Developer</li>
                          </ul>
                          <ul className='third-list'>
                            <li>1 day ago</li>
                            <li>Full Time</li>
                            <li>USA only</li>
                          </ul>
                  
                        </div>
                        <div className='sub-sub-container2'>
                          <ul className='sub-2-list'>
                            <li>Frontend Senior</li>
                            <li>Senior</li>
                            <li>Html</li>
                            <li>Css</li>
                            <li>JavaScript</li>
                          </ul>
                        </div>
                      </div>
                     </div>
                      {/* // Card-4 */}
      {/* <div className='container'>
                      <div className='container-logo'>
                       
                  <img src={photo} alt="" srcset="" width={100} height={100}   id='logoImg' />
                  
                  
                      </div>
                      <div className='sub-container'>
                        <div className='sub-sub-container1'>
                          <ul className='first-list'>
                            <li>My Home</li>
                           
                          </ul>
                          <ul className='second-list'>
                            <li>Junior Frontend Developer</li>
                          </ul>
                          <ul className='third-list'>
                            <li>1 day ago</li>
                            <li>Full Time</li>
                            <li>USA only</li>
                          </ul>
                  
                        </div>
                        <div className='sub-sub-container2'>
                          <ul className='sub-2-list'>
                            <li>Frontend Senior</li>
                            <li>Senior</li>
                            <li>Html</li>
                            <li>Css</li>
                            <li>JavaScript</li>
                          </ul>
                        </div>
                      </div>
                     </div>
                      {/* // Card-5 */}
      {/* <div className='container'>
                      <div className='container-logo'>
                       
                  <img src={photo} alt="" srcset="" width={100} height={100}   id='logoImg' />
                  
                  
                      </div>
                      <div className='sub-container'>
                        <div className='sub-sub-container1'>
                          <ul className='first-list'>
                            <li>Loop Studios</li>
                          
                          </ul>
                          <ul className='second-list'>
                            <li>Software Engineer</li>
                          </ul>
                          <ul className='third-list'>
                            <li>1 day ago</li>
                            <li>Full Time</li>
                            <li>USA only</li>
                          </ul>
                  
                        </div>
                        <div className='sub-sub-container2'>
                          <ul className='sub-2-list'>
                            <li>Frontend Senior</li>
                            <li>Senior</li>
                            <li>Html</li>
                            <li>Css</li>
                            <li>JavaScript</li>
                          </ul>
                        </div>
                      </div>
                     </div>
                      {/* // Card-6 */}
      {/* <div className='container'>
                      <div className='container-logo'>
                       
                  <img src={photo} alt="" srcset="" width={100} height={100}   id='logoImg' />
                  
                  
                      </div>
                      <div className='sub-container'>
                        <div className='sub-sub-container1'>
                          <ul className='first-list'>
                            <li>Facelt</li>
                            
                          </ul>
                          <ul className='second-list'>
                            <li>Junior Backend Developer</li>
                          </ul>
                          <ul className='third-list'>
                            <li>1 day ago</li>
                            <li>Full Time</li>
                            <li>USA only</li>
                          </ul>
                  
                        </div>
                        <div className='sub-sub-container2'>
                          <ul className='sub-2-list'>
                            <li>Frontend Senior</li>
                            <li>Senior</li>
                            <li>Html</li>
                            <li>Css</li>
                            <li>JavaScript</li>
                          </ul>
                        </div>
                      </div>
                     </div>
                      {/* // Card-7 */}
      {/* <div className='container'> */}
      {/* <div className='container-logo'>
                       
                  <img src={photo} alt="" srcset="" width={100} height={100}   id='logoImg' />
                  
                  
                      </div>
                      <div className='sub-container'>
                        <div className='sub-sub-container1'>
                          <ul className='first-list'>
                            <li>Insure</li>
                           
                          </ul>
                          <ul className='second-list'>
                            <li>Junior Backend Developer</li>
                          </ul>
                          <ul className='third-list'>
                            <li>1 day ago</li>
                            <li>Full Time</li>
                            <li>USA only</li>
                          </ul>
                  
                        </div>
                        <div className='sub-sub-container2'>
                          <ul className='sub-2-list'>
                            <li>Frontend Senior</li>
                            <li>Senior</li>
                            <li>Html</li>
                            <li>Css</li>
                            <li>JavaScript</li>
                          </ul>
                        </div>
                      </div>
                     </div>
                   
                      <div className='container'>
                      <div className='container-logo'>
                       
                  <img src={photo} alt="" srcset="" width={100} height={100}   id='logoImg' />
                  
                  
                      </div>
                      <div className='sub-container'>
                        <div className='sub-sub-container1'>
                          <ul className='first-list'>
                            <li>EyeCam Co.</li>
                          
                          </ul>
                          <ul className='second-list'>
                            <li>Full Stack Enginner</li>
                          </ul>
                          <ul className='third-list'>
                            <li>1 day ago</li>
                            <li>Full Time</li>
                            <li>USA only</li>
                          </ul>
                  
                        </div>
                        <div className='sub-sub-container2'>
                          <ul className='sub-2-list'>
                            <li>Frontend Senior</li>
                            <li>Senior</li>
                            <li>Html</li>
                            <li>Css</li>
                            <li>JavaScript</li>
                          </ul>
                        </div>
                      </div>
                     </div>
                
                      <div className='container'>
                      <div className='container-logo'>
                       
                  <img src={photo} alt="" srcset="" width={100} height={100}   id='logoImg' />
                  
                  
                      </div>
                      <div className='sub-container'>
                        <div className='sub-sub-container1'>
                          <ul className='first-list'>
                            <li>The Air Filter Company</li>
                           
                          </ul>
                          <ul className='second-list'>
                            <li>Front-end dev</li>
                          </ul>
                          <ul className='third-list'>
                            <li>1 day ago</li>
                            <li>Full Time</li>
                            <li>USA only</li>
                          </ul>
                  
                        </div>
                        <div className='sub-sub-container2'>
                          <ul className='sub-2-list'>
                            <li>Frontend Senior</li>
                            <li>Senior</li>
                            <li>Html</li>
                            <li>Css</li>
                            <li>JavaScript</li>
                          </ul>
                        </div>
                      </div>
                     </div>
                
                      <div className='container'>
                      <div className='container-logo'>
                       
                  <img src={photo} alt="" srcset="" width={100} height={100}   id='logoImg' />
                  
                  
                      </div>
                      <div className='sub-container'>
                        <div className='sub-sub-container1'>
                          <ul className='first-list'>
                            <li>Shortly</li>
                            
                          </ul>
                          <ul className='second-list'>
                            <li>Junior Developer</li>
                          </ul>
                          <ul className='third-list'>
                            <li>1 day ago</li>
                            <li>Full Time</li>
                            <li>USA only</li>
                          </ul>
                  
                        </div>
                        <div className='sub-sub-container2'>
                          <ul className='sub-2-list'>
                            <li>Frontend Senior</li>
                            <li>Senior</li>
                            <li>Html</li>
                            <li>Css</li>
                            <li>JavaScript</li>
                          </ul>
                        </div>
                      </div>
                     </div>     */}
    </>
  );
};

export default Job;
