import { useContext } from "preact/hooks";
import { ChannelCtx } from "../index";
import ChannelHeading from "./ChannelHeading";

function SideBar(props) {

  const { selectedChannel, setSelected } = useContext(ChannelCtx);

  const dataArr = Array.from(props.data);

  return (
    <section className="side-bar">
      <h1>Simple Slack Demo</h1>
      <ul> 
        {dataArr.map(channel => (
          <ChannelHeading key={dataArr.indexOf(channel)} name={dataArr.indexOf(channel)}/> 
        ))}
      </ul>
    </section>
  )
}

export default SideBar
