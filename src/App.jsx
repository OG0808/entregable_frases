import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import posts from "./json/posts.json";
import randomElementArray from "./utils/randomElementArray";
import PostsCard from "./components/PostsCard";
import Buton from "./components/ButtonPhrase";

const backRandon = [1, 2, 3, 4];

function App() {
  const initialPosts = randomElementArray(posts);

  const initialBackRandon = randomElementArray(backRandon);

  const [postRandom, setpostRandom] = useState(initialPosts);

  const [randonBack, setrandonBack] = useState(initialBackRandon);

  const objecStyle = {
    backgroundImage: `url('./images/fondo${randonBack}.jpg')`,
  
  };

  return (
    <div className="app" style={objecStyle} randonBack={setrandonBack}>
      {/* <img className="banner_fondo" src="./banner.svg" alt="" /> */}
      <div className="banner_and_buton_container">
        <div className="post_container">
      
          <PostsCard postRandom={postRandom} />
        </div>
        
      </div>
      <div className="buton_contaier">
          <Buton
            setpostRandom={setpostRandom}
            setrandonBack={setrandonBack}
            backRandon={backRandon}
          />
        </div>
    </div>
  );
}

export default App;
