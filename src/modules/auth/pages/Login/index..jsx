import React from 'react';
import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center bg-gray-50'>
            <div className='grid grid-cols-3 gap-8'>
                <LoginForm />
                <div className='col-span-2 bg-gray-300 border border-gray-400 rounded-md'></div>
            </div>
            
        </div>
    );
};

export default LoginPage;