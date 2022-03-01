const Contact = () => {
  return (
    <div className="contactContainer">
      <section>
        <h2>Contact</h2>
      </section>
      <main>
        <h3>Get in touch</h3>
        <form action="" style={{ display: "flex", flexDirection: "column" }}>
          <label> Name</label>
          <input
            id="contact"
            style={{ fontSize: "2.5rem" }}
            placeholder=" ..."
            type="text"
          />
          <label> Email</label>
          <input id="contact" type="text" />
          <label> Message</label>
          <textarea defaultValue="HSHADA" />
          <button>Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
