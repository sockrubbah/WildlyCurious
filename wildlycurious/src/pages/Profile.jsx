import "./css/profile.css";

const Profile = () => {
  return (
    
    <div className="profile-container">
      <header>
        <h1>My Profile</h1>
      </header>
      <main className="profile-content">
        <section className="left-side">
          <div className="profile-image">
            <img src="./images/1000064641.jpg" alt="Profile Pic" />
          </div>
          <input type="file" id="upload-image" />
          <button className="change-profile-pic">Change Profile Picture</button>

          <h2>Bio</h2>
          <textarea id="bio-text" placeholder="I'm FernFury, an adventurer at heart!"></textarea>
          <button className="edit-bio">Edit Bio</button>
        </section>

        <section className="right-side">
          <h2>Posts</h2>
          <div className="posts">
            <a href="/postexample" className="post-box-link">
              <div className="post-box">Post 1</div>
            </a>
            <div className="post-box">Post 2</div>
            <div className="post-box">Post 3</div>
          </div>

          <h2>Forum Posts</h2>
          <div className="forum-box">
            <div className="forum-post">What’s the Most Fascinating Plant You’ve Encountered?</div>
            <div className="forum-post">Small Ways to Help the Environment in Your Daily Life</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;