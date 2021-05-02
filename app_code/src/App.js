import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [Website, SetWebsite] = useState('');
  const [Password, SetPassword] = useState('');
  const [PasswordList, SetPasswordList] = useState([]);

  const AddPassword = () => {
    Axios.post('http://localhost:3017/addpassword', {
      Password: Password,
      Website: Website,
    });
  };

  const DecryptPassword = (encryption) => {
    Axios.post('http://localhost:3017/decryptpassword', {
      Password: encryption.Password, 
      IV: encryption.IV,
    })
    .then((response) => {
      SetPasswordList(PasswordList.map((val) => {
        return val.ID == encryption.ID ? {
          ID : val.ID, 
          Password: val.Password,
          Website: response.data,
          IV: val.ID} : val
      }))
    });
  };

  useEffect(() => {
    Axios.get('http://localhost:3017/showpasswords').then((response) => {
        SetPasswordList(response.data);
      });
  }, []);

  return (
    <div className = 'App'
    >
      <div className = 'AddingPassword'
      >
        <input type= 'text' placeholder = 'Type Website...'
          onChange={(event) => { SetWebsite(event.target.value);
          }}
        />
        <input type = 'text' placeholder = 'Type Password...'
          onChange={(event) => { SetPassword(event.target.value);
          }}
        />
        <button onClick={AddPassword}> Add Password </button>
      </div>
      <div
        className = 'Passwords'
      >
        {PasswordList.map((val, key) => {
          return (
            <div className = 'password' onClick={() => {
              DecryptPassword({
                Password: val.Password,
                IV: val.IV, ID: val.ID
              });
            }}
              key={key}>
              <h3>{val.Website}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
