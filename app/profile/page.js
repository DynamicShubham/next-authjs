"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"

export default function Component() {
  const { data: session } = useSession()
  console.log(session)
  if (session) {
    return <>
      <div className="container flex justify-center my-20">
        <div className="w-full max-w-sm bg-gray-900  rounded-lg shadow  ">
          <div className="flex p-16 flex-col items-center ">
            <Image className="w-24 h-24 mb-3 rounded-full shadow-lg" width={200} height={100} src={session.user.image} alt="Bonnie image" />
            <h5 className="mb-1 text-xl font-medium text-white dark:text-white">{session.user.name}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">{session.user.email}</span>
            <div className="flex mt-4 md:mt-6">
              <button onClick={() => signOut()}>
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Out</a>
              </button>
              <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
            </div>
          </div>
        </div>
      </div>
    </>
  }
  return <>

    <div className="container flex justify-center my-20">
      <div className="w-full max-w-sm bg-gray-900  rounded-lg shadow  ">
        <div className="flex p-16 flex-col items-center ">
          <Image className="w-24 h-24 mb-3 rounded-full shadow-lg"  width={200} height={100} src="/assets/user.svg" alt="Bonnie image" />
          <h5 className="mb-1 text-xl font-medium text-white dark:text-white">User Name</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">User email id</span>
          <div className="flex mt-4 md:mt-6">
            <button onClick={() => signIn("google")}>
              <a href="#" className="inline-flex mx-2 items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In with google</a>
            </button>
            <button onClick={() => signIn("github")}>
              <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-800 bg-white rounded-lg hover:bg-white/70 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In with github</a>
            </button>
          </div>
        </div>
      </div>
    </div>


  </>
}
