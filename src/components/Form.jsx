import { useForm } from "react-hook-form"

import '../style/Contact.css'

export default function Form() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)} className=" grid grid-cols-2 gap-6">
                <div className=" flex flex-col justify-around">
                    <label>First Name</label>
                    <input className="border-2 border-gray-200 rounded-md" {...register("First name")}></input>
                </div>
                <div className=" flex flex-col justify-around">
                    <label>Last Name</label>
                    <input className="border-2 border-gray-200 rounded-md" {...register("Last name")}></input>
                </div>
                <div className=" flex flex-col justify-around col-span-2">
                    <label>Email</label>
                    <input className="border-2 border-gray-200 rounded-md" {...register("Email")}></input>
                </div>
                <div className=" flex flex-col justify-around col-span-2">
                    <label>Phone Number</label>
                    <input className="border-2 border-gray-200 rounded-md" {...register("Phone Number")}></input>
                </div>
                <div className=" flex flex-col justify-around col-span-2">
                    <label>Message</label>
                    <input className="border-2 border-gray-200 rounded-md" {...register("Message")}></input>
                </div>
                <div>
                    <input type="submit" className=" bg-sky-300 rounded-md p-2 pr-4 pl-4"></input>
                </div>
            </form >

        </>
    )
}