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
      <div className="ml-2">
        <Image
          src={value.data().photoURL}
          width={40}
          height={40}
          className="rounded-full"
          placeholder="blur"
          blurDataURL={value.data().photoURL}
        />
      </div>
      <span className="text-sm text-gray-400">{value.data().displayName}</span>
    </div>
  );
};

export default User;
