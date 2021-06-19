import React from 'react';
import Image from 'next/image';
import { useDocument } from 'react-firebase-hooks/firestore';
import firebaseClient from '../firebase/client';

type UserProps = {
  id: string;
};

const User: React.FC<UserProps> = ({ id }) => {
  const [value, loading, error] = useDocument(
    firebaseClient.firestore().doc(`users/${id}`)
  );

  if (loading) return null;

  return (
    <div className="flex space-x-2 items-center">
      <Image
        src={value.data().photoURL}
        className="ml-2 w-12 h-12 rounded-full"
      />
      <span className="text-sm text-gray-400">{value.data().displayName}</span>
    </div>
  );
};

export default User;
