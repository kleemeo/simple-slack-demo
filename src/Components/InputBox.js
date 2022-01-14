import firebase from "../firebase";

import { useContext, useState } from "preact/hooks";
import { ChannelCtx } from "../index";


const submitMessage = (message, channel) => {

  const dbRef = firebase.database().ref(`/${channel}`);

  // mock object
  dbRef.push({
    email: "xxx@gmail.com",
    first_name: "You",
    timestamp: Date.now(),
    message: message,
    user_img: "https://picsum.photos/200"
  })
}

function InputBox() {

  const [inputMessage, setInputMessage] = useState('');

  const { selectedChannel } = useContext(ChannelCtx);

  const submitHandler = e => {
    e.preventDefault();
    submitMessage(inputMessage, selectedChannel);
    setInputMessage('')
  }

  return (
    <section className="input-box">

      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Message..." value={inputMessage} onChange={(e) => setInputMessage(e.target.value)}/>
        <button type="submit">Send</button>
      </form>
    </section>
  )
}

export default InputBox
