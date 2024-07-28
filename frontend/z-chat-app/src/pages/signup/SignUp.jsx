import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
  return (
  <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0' >
    <h1 class='glow'>Zidio Chat App<br />
        <span className='text-blue-500'>Sign Up</span>
    </h1>

      <div class='container'>
      <form>
        <div>
          <label className='label p-2 '>
            <span className='text-base label-text'>Full Name</span>
          </label>
          <input type='text' placeholder='Benny Mac' className='w-full input input-bordered h-10' />
        </div>

        <div>
          <label className='label p-2'>
            <span className='text-base label-text'>Username</span>
          </label>
          <input 
          type='text' 
          placeholder='BennyMac' 
          className='w-full input input-bordered h-10'
          />
        </div>

      <div>
      <label className='label'>
            <span className='text-base label-text'>Password</span>
          </label>
          <input 
          type='password' 
          placeholder='Enter Password' 
          className='w-full input input-bordered h-10'
          />
      </div>

    <div>
      <label className='label'>
            <span className='text-base label-text'>Comfirm Password</span>
          </label>
          <input 
          type='password' 
          placeholder='Comfirm Password' 
          className='w-full input input-bordered h-10'
          />
          </div>

          <GenderCheckBox />

          <a className='text-sm hover:underline hover:text-blue-600 mt-4 inline-block' href='#' >
          Already have an account?
        </a>

        <div>
        <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
      </div>
      </form>
      </div>
    </div>
  </div>
  );
};
export default SignUp;


// STARTER CODE FOR SIGNUP COMPONENT
// import GenderCheckBox from "./GenderCheckBox";

// const SignUp = () => {
//   return (
//   <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//     <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0' >
//     <h1 class='glow'>Zidio Chat App<br />
//         <span className='text-blue-500'>Sign Up</span>
//     </h1>

//       <div class='container'>
//       <form>
//         <div>
//           <label className='label p-2 '>
//             <span className='text-base label-text'>Full Name</span>
//           </label>
//           <input type='text' placeholder='Benny Mac' className='w-full input input-bordered h-10' />
//         </div>

//         <div>
//           <label className='label p-2'>
//             <span className='text-base label-text'>Username</span>
//           </label>
//           <input 
//           type='text' 
//           placeholder='BennyMac' 
//           className='w-full input input-bordered h-10'
//           />
//         </div>

//       <div>
//       <label className='label'>
//             <span className='text-base label-text'>Password</span>
//           </label>
//           <input 
//           type='password' 
//           placeholder='Enter Password' 
//           className='w-full input input-bordered h-10'
//           />
//       </div>

//     <div>
//       <label className='label'>
//             <span className='text-base label-text'>Comfirm Password</span>
//           </label>
//           <input 
//           type='password' 
//           placeholder='Comfirm Password' 
//           className='w-full input input-bordered h-10'
//           />
//           </div>

//           <GenderCheckBox />

//           <a className='text-sm hover:underline hover:text-blue-600 mt-4 inline-block' href='#' >
//           Already have an account?
//         </a>

//         <div>
//         <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
//       </div>
//       </form>
//       </div>
//     </div>
//   </div>
//   );
// };
// export default SignUp;