import React from 'react';
import firebaseClient from '../firebase/client';

interface Props {}

const Header = (props: Props) => {
  const logout = () => {
    firebaseClient.auth().signOut();
  };
  return (
    <div className="mt-16 flex justify-end w-full">
      <button
        className="bg-transparent text-white font-semibold hover:text-purple-500 py-2 px-4 border border-purple-500 hover:border-purple-800 rounded"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
