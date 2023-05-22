import randomElementArray from "../utils/randomElementArray";
import posts from '../json/posts.json'

const Buton =({ setpostRandom, setrandonBack, backRandon }) => {
    const handleRaondom = ()=>{
      setpostRandom(randomElementArray(posts));
      setrandonBack(randomElementArray(backRandon))
       
        
      }
      return <button className="btn" onClick={handleRaondom}>Abrir otra Galleta</button>
}


export default Buton