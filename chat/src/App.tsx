import "./App.css"

export default () => {
  return <>
  <main>
    <div className="message">
      <div className="user">  Tutu, aquele o sábio!  </div>
      <div className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quibusdam fuga temporibus quis dolorem ex quaerat repudiandae perspiciatis minima labore voluptas autem, vel neque illum ipsum. Porro harum ipsum ut.</div>
    </div>

    <div className="message self">
      <div className="user">  Dirce, aquele fdp!  </div>
      <div className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quibusdam fuga temporibus quis dolorem ex quaerat repudiandae perspiciatis minima labore voluptas autem, vel neque illum ipsum. Porro harum ipsum ut.</div>
    </div>
  </main>
  <div className="input-area">
      <input type="text" placeholder="Write your message"/>
      <button type="submit">Send</button>
  </div>
  </>
}
