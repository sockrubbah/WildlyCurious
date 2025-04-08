export default function LoadPosts() {
    const posts = [
      { author: "FernFury", image: "wildlycurious/src/images/1000064641.jpg", link: "postexample.html" },
      { author: "CactusWhisperer", image: "wildlycurious/src/images/Screenshot_20230425.jpg", link: "postexample.html" },
      { author: "MossyMountain", image: "wildlycurious/src/images/Screenshot_202304252.jpg", link: "postexample.html" },
      { author: "TigerTrail", image: "wildlycurious/src/images/Screenshot_202304253.jpg", link: "postexample.html" },
      { author: "RockyRover", image: "wildlycurious/src/images/Screenshot_202304254.jpg", link: "postexample.html" },
      { author: "WillowWanderer", image: "wildlycurious/src/images/Screenshot_20230707.jpg", link: "postexample.html" },
      { author: "CheetahChase", image: "wildlycurious/src/images/Screenshot_20230826.jpg", link: "postexample.html" },
      { author: "LimestoneLover", image: "wildlycurious/src/images/20240304_101406.jpg", link: "postexample.html" },
      { author: "PineConePioneer", image: "wildlycurious/src/images/Screenshot_20230504.jpg", link: "postexample.html" },
    ];
  
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