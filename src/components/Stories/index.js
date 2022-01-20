import { useState , useEffect} from 'react';
import './style.css';
// import { Container } from './styles';

export function Stories() {

  const [storys , setStorys] = useState([])

  const [limiteStorys, setLimiteStorys] = useState(6)

  const historys = storys.slice(0, limiteStorys)

  useEffect (() => {
    fetch(`https://api.github.com/users/jesseduffield/followers`)
    .then((response) => {
        return response.json()
    })

    .then((results) => {
        setStorys(results)
    })

    .catch((err) => {
        throw new Error(err)
    })

  },[]);

  return (

      <div className='container'>
          

          {historys.map((sticks, key) => (
               <div className='user-elements'>
                    <div key={key}>
                        <img className='image-user-story' src={`https://github.com/${sticks.login}.png`} />
                        
                    </div>
                    <span>{sticks.login}</span>
                </div>
          ))}
         

          
      </div>
  );
}

export default Stories;