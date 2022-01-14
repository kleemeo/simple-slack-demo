import './style';
import SideBar from './Components/SideBar';
import Channel from './Components/Channel';
import { useEffect, useState } from "preact/hooks"
import firebase from "./firebase"
import { createContext } from 'preact';


export const ChannelCtx = createContext({
  selectedChannel: 0,
  setSelected: () => {}
});

export default function App() {

  const [selectedChannel, setSelected] = useState(0);
  const value = { selectedChannel, setSelected };
  const [data, setData] = useState({})

  useEffect(() => {
    const dbRef = firebase.database().ref();

    dbRef.on('value', snapshot => {
      const data = Object.values(snapshot.val());
      data.map(item => null)
      setData(data);
    })

  }, [])

  return (
    <>
      <header>
        <h1>Simple Slack</h1>
      </header>
      <main>
        <div className="main-window">
          <ChannelCtx.Provider value={value}>
            <SideBar data={data} />
            <Channel />
          </ChannelCtx.Provider>
        </div>
      </main>
    </>
  );
}
