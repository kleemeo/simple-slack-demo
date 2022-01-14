import Message from "./Message"

function Feed({data}) {

  const messages = Array.from(data);

  messages.sort((b, a) => b.timestamp - a.timestamp)

  return (
    <section className="feed">
      {messages.map(message => (
        <Message data={message}/>
      ))}
    </section>
  )
}

export default Feed
