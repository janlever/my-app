const Jan = () => {
  return (
    <>
      <h2>Jan Henrik Levertand</h2>
      <text>Minu huvid:</text>
      <ol>
        <li>korvpall</li>
        <li>women</li>
        <li>kassid</li>
        <li>kui ropz ace teeb</li>
        <li>väike trip kuhugi</li>
        <li>zazong</li>
        <li>hea youtube video</li>
        <li>hommikul sissemagamine</li>
        <li>kena higine trenn</li>
        <li>hessi kupongid</li>
        <li>mustalt töö tegemine</li>
        <li>karamellijäätis</li>
      </ol>
      <form>
        <label htmlFor="Name">Nimi </label>
        <input id="Name" />
        <label htmlFor="Email">E-mail </label>
        <input
          type="email"
          id="Email"
        />
        <br />
        <label htmlFor="Message">Lemmik Eesti youtuber</label>
        <textarea
          id="Message"
          rows="5"
          cols="50"
        />
        <input
          type="Submit"
          value="Submit"
        />
      </form>
      <div>
        <button>Click here!</button>
      </div>
    </>
  )
}

export default Jan
