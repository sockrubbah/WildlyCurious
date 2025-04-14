export default function LoadPosts() {
    const posts = [
      { author: "FernFury", image: "./images/1000064641.jpg", link: "/post" },
      { author: "CactusWhisperer", image: "./images/Screenshot_20230425.jpg", link: "/post" },
      { author: "MossyMountain", image: "./images/Screenshot_202304252.jpg", link: "/post"} ,
      { author: "TigerTrail", image: "./images/Screenshot_202304253.jpg"},
      { author: "RockyRover", image: "./images/Screenshot_202304254.jpg"},
      { author: "WillowWanderer", image: "./images/Screenshot_20230707.jpg"},
      { author: "CheetahChase", image: "./images/Screenshot_20230826.jpg"},
      { author: "LimestoneLover", image: "./images/20240304_101406.jpg"},
      { author: "PineConePioneer", image: "./images/Screenshot_20230504.jpg"},
    ];

    const examplePost = {
  author: "FernFury",
  image: "/images/1000064641.jpg",
  description: "Found a very rare spider lily on my walk??",
  comments: [
    { user: "LeafLover", text: "This is stunning, FernFury! 🍃" },
    { user: "MossMaster", text: "Love the natural tones. 🌿" },
    { user: "RootRunner", text: "FernFury never disappoints! 🌱🔥" }
  ]
};
  
    return (
      <div className="grid">
        {posts.map((post, index) => (
          <a href={post.link} key={index} className="post">
            <div className="post-author">{post.author}</div>
            <img src={post.image} alt={`Post by ${post.author}`} width="200px" height="200px" />
          </a> 
        ))}
      </div>
    );
  }