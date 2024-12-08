import React, { useState } from 'react';

const Login = () => {

    const [state, setState] = useState({
        username: '',
        password: ''
    })

    const handleOnchange = (e) => {
        const {name, value} = e.target

        setState((state)=>({
            ...state,
            [name]:value
        }))
    }

    return (
        <>
            <div className="flex justify-center h-dvh">
                <form className='flex flex-col justify-center bg-stone-500 w-96'>
                    <h2 className='text-center font-bold'>Login to Proceed</h2>
                    <div className='flex flex-col items-center'>
                        <label className='min-w-10 w-44' htmlFor='uname'>Username</label>
                        <input
                            id='uname'
                            type='text'
                            name='username'
                            className='border border-black rounded-md w-44'
                            placeholder='Eg: abdul'
                            required
                            value={state.username}
                            onChange={handleOnchange}
                        />
                    </div>
                    <div className='flex flex-col items-center mt-3'>
                        <label className='min-w-10 w-44' htmlFor='passwd'>Password</label>
                        <input
                            id='passwd'
                            name='password'
                            type='password'
                            className='border border-black rounded-md w-44'
                            required
                            value={state.password}
                            onChange={handleOnchange}
                        />
                    </div>
                    <div className='flex justify-center mt-3'>
                    <button type='submit' className='bg-orange-400 border border-orange-400 rounded-md min-w-14'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;