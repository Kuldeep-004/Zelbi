import { useSelector } from "react-redux"

import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({  formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] bg-black place-items-center">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="flex w-screen justify-center gap-y-12 py-12 ">
          <div className="mx-auto w-full max-w-[450px]">
            
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
          <div className="relative mx-auto mt-14 w-11/12 max-w-[450px] md:mx-0">
       
          </div>
        </div>
      )}
    </div>
  )
}

export default Template