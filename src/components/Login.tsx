'use client'

import Link from "next/link"
import GoogleButton from "react-google-button"
import { Form, useForm } from "react-hook-form"

type Props = {}

const Login = (props: Props) => {
  const { control, formState: { errors }, register } = useForm()
  return (
    <>
      <article className="w-[50%] mx-auto my-2 text-center">
        <Form action="" control={control} className="h-48 flex flex-col items-center justify-evenly pt-4 bg-black text-white">
          <input {...register("name")} className="w-max bg-slate-600" placeholder="email" />
          <input {...register("password")} type="password" className="w-max bg-slate-600" placeholder="******" />
          <p>{errors?.root?.server && 'Server error'}</p>
          <button className="bg-white text-slate-800 px-4 py-2 rounded-md">Submit</button>
        </Form>

        <GoogleButton className="mx-auto my-2" />
        <Link href="/main" className="">
          Sign In
        </Link>
      </article>
    </>
  )
}

export default Login