

const loginUser = (e) => {
    e.preventDefault();
    console.log(email, password);
}

const Login = () => {
return (
    <div className='flex justify-center'>
        <form onSubmit={(e) => {
            loginUser(e);
        }} action="" className='w-125 font-mono shadow-sm space-y-4 mt-20 shadow-black'>
            <div>
                <label htmlFor="email">
                    Email:
                    <br />
                    <input className='border outline-none' type="email" placeholder='Enter email...' id='email' />

                </label>
            </div>
            <div>
                <label htmlFor="password">
                    Password:
                    <br />
                    <input className='border outline-none' type="password" placeholder='Enter Password...' id='password' /><br />
                </label>
            </div>
            <button className='bg-orange-500 text-white w-full'>Login</button>
        </form>
    </div>
);
}

export default Login;
