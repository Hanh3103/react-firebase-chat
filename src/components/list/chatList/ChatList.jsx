import"./chatlist.css"
import"./CustomScrollbar.css"
import { useState } from "react"

const ChatList = () => {
    const [addMode, setAddMode] = useState(false) 
    return(
        <div className="chatList">
            <div className="search">
                <div className="searchbar">
                    <img src="./search.png" alt="" />
                    <input type="text" placeholder="Search" />
                </div>

                <img 
                    src={addMode ? "./minus.png" :"./plus.png"} 
                    alt=""
                    className="add"
                    onClick={() => setAddMode(!addMode)}
                />
            </div>
            <div className="chats">
                <div className="chatItem">
                    <img src="./avatar.png" alt="" />
                    <div className="chatinfo">
                        <span>John Doe</span>
                        <p>Hey there</p>
                    </div>
                    <p className="time">12:00</p>
                </div>
                <div className="chatItem">
                    <img src="./avatar.png" alt="" />
                    <div className="chatinfo">
                        <span>Jane Doe</span>
                        <p>Hey</p>
                    </div>
                    <p className="time">11:00</p>
                </div>
                <div className="chatItem">
                    <img src="./avatar.png" alt="" />
                    <div className="chatinfo">
                        <span>John Doe</span>
                        <p>Hey there</p>
                    </div>
                    <p className="time">10:00</p>
                </div>
                <div className="chatItem">
                    <img src="./avatar.png" alt="" />
                    <div className="chatinfo">
                        <span>John Doe</span>
                        <p>Hey there</p>
                    </div>
                    <p className="time">10:00</p>
                </div>
                <div className="chatItem">
                    <img src="./avatar.png" alt="" />
                    <div className="chatinfo">
                        <span>John Doe</span>
                        <p>Hey there</p>
                    </div>
                    <p className="time">10:00</p>
                </div>
                <div className="chatItem">
                    <img src="./avatar.png" alt="" />
                    <div className="chatinfo">
                        <span>John Doe</span>
                        <p>Hey there</p>
                    </div>
                    <p className="time">10:00</p>
                </div>
                <div className="chatItem">
                    <img src="./avatar.png" alt="" />
                    <div className="chatinfo">
                        <span>John Doe</span>
                        <p>Hey there</p>
                    </div>
                    <p className="time">10:00</p>
                </div>
                <div className="chatItem">
                    <img src="./avatar.png" alt="" />
                    <div className="chatinfo">
                        <span>John Doe</span>
                        <p>Hey there</p>
                    </div>
                    <p className="time">10:00</p>
                </div>
            </div>
        </div>

    );
};

export default ChatList