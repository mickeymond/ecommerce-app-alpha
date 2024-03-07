
export default function Register() {
    return (
   <div className=" min-h-screen py-40 bg-stone-400">
   <div className=" flex max-w-sm items-center mx-auto bg rounded-xl space-x-3">
   
    <form  action="#"     className="flex flex-col container mx-auto bg-white rounded-xl">
     <div className="shadow-lg overflow-hidden">
     <h3 className="text-2xl  mb-4 text-center">Register Page</h3>
     <p className="px-2">Create a new account</p>
         <div className="px-5 py-6">
        <div className="grid grid-cols-2 gap-5">
            <input placeholder="First Name" type="text"  className="py-1  px-2 border border-black rounded-xl" />
            <input placeholder="Last Name" type="text"  className="py-1  px-2 border border-black rounded-xl" />
        </div >

        <div className="mt-5">
        <input placeholder="Email" type="email" className="py-1  px-2 w-full border border-black rounded-xl" />
        </div>

        <br />
        <input placeholder="Password" type="password" className="py-1  px-2 w-full border border-black rounded-xl"/>
        <br />

        <div className="mt-5">
        <input placeholder="Confirm password" type="password" className="py-1  px-2 w-full border border-black rounded-xl" />
        </div>

        <div className="mt-4">
        <input  type="checkbox" className="border border-black rounded-xl" /> 
        <span>I accept <a href="#" className="text-blue-700 font-semibold">Terms of Use</a> &<a href="#"  className="text-blue-700 font-semibold">Privacy Policy</a></span>
        </div>
        <div className="mt-5">
        <button className="w-full bg-black text-white rounded-xl py-2">Register Now</button>
        </div>
        
         <br />
        <p>Already have an account? <a href="/login" className="text-blue-700 font-semibold">Log in</a></p>
        </div>

        </div>
    </form>
   </div>
   </div>
    );
}