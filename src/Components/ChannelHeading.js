import { useContext } from "preact/hooks";
import { ChannelCtx } from "../index";

function ChannelHeading({ name }) {
  
const { selectedChannel, setSelected } = useContext(ChannelCtx);
  
  const styles = name == selectedChannel ? "channel-text active" : "channel-text"

  return (
    <li className={styles} onClick={()=>setSelected(name)}>
      <h3># Channel {name}</h3>
    </li>
  )
}

export default ChannelHeading
