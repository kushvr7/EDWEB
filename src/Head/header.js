import React from 'react';
import './head.css';

function header() {
    return (
        <div>
            <div className="Hmainwrap"> 
                 <div className="Himgcont">  
                     <a href="http://www.edbudz.in/"> <div className="Himgwrap"></div></a> 
                 </div>
                 <div className="Hnavlist">   
                     <ul>
                         <a href="http://www.edbudz.in/about-us/"><li><span className="Hlist1">About Us</span></li></a>
                         <a href="http://www.edbudz.in/"><li><span className="Hlist2">Home</span></li></a>
                         <a href="http://www.edbudz.in/courses/"><li><span className="Hlist3">Courses</span></li></a>
                         <a href="http://www.edbudz.in/contact-us/"><li><span className="Hlist4">Contact Us</span></li></a>
                         <a href="#"><li><span className="Hlist1">--XYZ--</span></li></a>


                     </ul>
                    
                 </div>
            </div>
        </div>
    )
}

export default header;
