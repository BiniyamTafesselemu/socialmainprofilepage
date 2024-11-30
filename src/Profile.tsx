import { useState } from 'react';
import avatar from './assets/avatar-jessica.jpeg';

function Profile() {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  const buttons = [
    { label: 'GitHub' },
    { label: 'Frontend Mentor' },
    { label: 'LinkedIn' },
    { label: 'Twitter' },
    { label: 'Instagram' },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-grey-900">
      <div className="h-auto max-w-[375px] w-full md:max-w-[400px] bg-grey-800 flex flex-col items-center p-5">
        <img className='rounded-full h-32 w-32 mt-5' src={avatar} alt="Profile" />
        <h1 className="text-white text-3xl text-center mt-3">Jessica Randall</h1>
        <p className="text-lemon mt-1">London, United Kingdom</p>
        <p className='text-white mt-5 text-sm'>Front-end developer and avid reader.</p>
        <div className='flex flex-col items-center justify-center mt-4 w-full'>
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`mb-2 w-full h-[50px] border-5 ${selectedButton === index ? 'bg-lemon border-lemon' : 'bg-grey-700 border-grey-500'} border-solid rounded m-1 text-white`}
              onClick={() => handleButtonClick(index)}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
