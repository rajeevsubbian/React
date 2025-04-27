import "./App.css";

function App() {
  const userprofile = [
    {
      id: 1,
      name: "Rajeev Subbian",
      email: "rajeev.subbian@email.com",
      bio: "Software Engineer with a passion for web development.",
    },
  ];

  return (
    <>
      <div className="user-profile">
        {userprofile.map((user, index) => (
          <User
            key={user.id}
            name={user.name}
            email={user.email}
            bio={user.bio}
          />
        ))}
      </div>
    </>
  );
}

export default App;

function User({ name, email, bio }) {
  // console.log(props);
  return (
    <div>
      <h1>{name}</h1>
      <p>Email: {email}</p>
      <p>Bio: {bio}</p>
    </div>
  );
}
