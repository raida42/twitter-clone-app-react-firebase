import React, { useEffect } from 'react';
import style from  './App.module.css';
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import { auth } from "./firebase";
import { Auth, Feed } from './components';


const  App: React.FC = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((authUser)=> {
      if (authUser){
        dispatch(
          login({
            uid: authUser.uid,
            photoUrl: authUser.photoURL,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return () => {
      unSub();
    }
  }, [dispatch]);


  return (
    <>
      {user.uid ? (
        <div className={style.app}>
          <Feed/>
        </div>
      ) : (
        <Auth/>
      )
      }
    </>
  )
}

export default App;