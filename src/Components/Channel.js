import firebase from "../firebase";
import Feed from "./Feed"
import InputBox from "./InputBox"

import { useContext, useEffect, useState } from "preact/hooks";
import { ChannelCtx } from "../index";

function Channel() {

  const { selectedChannel } = useContext(ChannelCtx);

  const [messageData, setMessageData] = useState([]);

  useEffect(() => {
    const dbRef = firebase.database().ref();

    dbRef.on('value', snapshot => {
      const data = snapshot.val()[selectedChannel];
      const messagesArr = Object.values(data);
      setMessageData(messagesArr);
    })

  }, [selectedChannel])
  
  return (
    <section className="channel">
      <Feed data={messageData}/>
      <InputBox/>
    </section>
  )
}

export default Channel
