import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';


export default function Sidebar() {
  return (
    <div className='sidebar'>
       <div className="sidebarWrapper">
         <ul className="sidebarList">
           <li className="sidebarListItem">
            <RssFeedIcon className='sidebarIcon'/>
            <span className="sidebarLstItemText">Feed</span>
           </li>
           <li className="sidebarListItem">
            <ChatIcon className='sidebarIcon'/>
            <span className="sidebarLstItemText">Chats</span>
           </li>
           <li className="sidebarListItem">
            <PlayCircleIcon className='sidebarIcon'/>
            <span className="sidebarLstItemText">Videos</span>
           </li>
           <li className="sidebarListItem">
            <GroupIcon className='sidebarIcon'/>
            <span className="sidebarLstItemText">Groups</span>
           </li>
           <li className="sidebarListItem">
            <BookmarksIcon className='sidebarIcon'/>
            <span className="sidebarLstItemText">Bookmarks</span>
           </li>
           <li className="sidebarListItem">
            <HelpOutlineIcon className='sidebarIcon'/>
            <span className="sidebarLstItemText">Questions</span>
           </li>
           <li className="sidebarListItem">
            <WorkOutlineIcon className='sidebarIcon'/>
            <span className="sidebarLstItemText">Job</span>
           </li>
           <li className="sidebarListItem">
            <EventIcon className='sidebarIcon'/>
            <span className="sidebarLstItemText">Events</span>
           </li>
           <li className="sidebarListItem">
            <SchoolIcon className='sidebarIcon'/>
            <span className="sidebarLstItemText">Courses</span>
           </li>
         </ul>
         <button className='sidebarButton'>Show More</button>
         <hr className='sidebarHr'/>
         <ul className="sidebarFriendList">
            <li className="sidebarFriend">
                 <img className='sidebarFriendImg' src="/assets/person/dhilip.jpg" alt="" />
                 <span className="sidebarFriendName">Dhilip_Kumar</span>
            </li>
            <li className="sidebarFriend">
                 <img className='sidebarFriendImg' src="/assets/person/abi.jpg" alt="" />
                 <span className="sidebarFriendName">Abishek_M_S</span>
            </li>
            <li className="sidebarFriend">
                 <img className='sidebarFriendImg' src="/assets/person/abr.jpg" alt="" />
                 <span className="sidebarFriendName">Abrar_H</span>
            </li>
            <li className="sidebarFriend">
                 <img className='sidebarFriendImg' src="/assets/person/athi.jpg" alt="" />
                 <span className="sidebarFriendName">AK7</span>
            </li>
            <li className="sidebarFriend">
                 <img className='sidebarFriendImg' src="/assets/person/dharneesh.jpg" alt="" />
                 <span className="sidebarFriendName">Dharneesh</span>
            </li>
            <li className="sidebarFriend">
                 <img className='sidebarFriendImg' src="/assets/person/gladwwin.jpg" alt="" />
                 <span className="sidebarFriendName">Gladwin</span>
            </li>
            <li className="sidebarFriend">
                 <img className='sidebarFriendImg' src="/assets/person/gousik.jpg" alt="" />
                 <span className="sidebarFriendName">Gousik</span>
            </li>
            <li className="sidebarFriend">
                 <img className='sidebarFriendImg' src="/assets/person/jegan.jpg" alt="" />
                 <span className="sidebarFriendName">Jegan_D_J</span>
            </li>
            <li className="sidebarFriend">
                 <img className='sidebarFriendImg' src="/assets/person/kishore.jpg" alt="" />
                 <span className="sidebarFriendName">Kishore_Kumar_R_S</span>
            </li>
            <li className="sidebarFriend">
                 <img className='sidebarFriendImg' src="/assets/person/mathan.jpg" alt="" />
                 <span className="sidebarFriendName">Mathan_Muthu_Kumar</span>
            </li>
            <li className="sidebarFriend">
                 <img className='sidebarFriendImg' src="/assets/person/mohan.jpg" alt="" />
                 <span className="sidebarFriendName">Ram</span>
            </li>
            <li className="sidebarFriend">
                 <img className='sidebarFriendImg' src="/assets/person/pradeep.jpg" alt="" />
                 <span className="sidebarFriendName">Mr_Pradeep</span>
            </li>
            <li className="sidebarFriend">
                 <img className='sidebarFriendImg' src="/assets/person/viki.jpg" alt="" />
                 <span className="sidebarFriendName">master_Vikki</span>
            </li>
            <li className="sidebarFriend">
                 <img className='sidebarFriendImg' src="/assets/person/vim.jpg" alt="" />
                 <span className="sidebarFriendName">Vimal_Vkm</span>
            </li>
         </ul>
       </div>
    </div>
  )
}
