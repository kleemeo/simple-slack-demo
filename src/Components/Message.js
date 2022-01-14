function Message({ data }) {
  console.log(data.timestamp)
  let dateObj = new Date(parseInt(data.timestamp));
  console.log(dateObj.toLocaleTimeString());

  return (
    <article className="message">
      <img src={data.user_img} alt="random" />
      <div className="message-text">
        <h5>{data.first_name} <span className="time">{dateObj.toLocaleString()}</span></h5>
        <p>{data.message}</p>
      </div>
    </article>
  )
}

export default Message
