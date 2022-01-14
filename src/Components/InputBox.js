import firebase from "../firebase";

import { useContext, useEffect } from "preact/hooks";
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

  const { selectedChannel } = useContext(ChannelCtx);

  const submitHandler = e => {
    e.preventDefault();
    submitMessage("TEST", selectedChannel);
  }

  return (
    <section className="input-box">

      <form onSubmit={submitHandler}>
        <textarea type="textarea" placeholder="Message with a generated name"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  )
}

export default InputBox
