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

            <form onSubmit={handleSubmit(onSubmit)} className=" col-span-2 flex flex-col gap-4 space-around p-4  bg-gray-50 border border-solid rounded-2xl h-full ">

                <div className="grid grid-cols-2  gap-6">
                    <h2 className="col-span-2 text-3xl ">Tell Us What you Need</h2>
                    <p className="col-span-2">Our team is ready to assist you with every detail, big or small.</p>
                    <div className=" flex flex-col justify-around col-span-1">
                        <input className=" rounded-3xl pl-2 pt-6 pb-6 bg-white border  text-heading  rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs" {...register("First name")} placeholder="First Name"></input>
                    </div>
                    <div className=" flex flex-col justify-around col-span-1">
                        <input className="rounded-3xl pl-2 pt-6 pb-6 " {...register("Last name")} placeholder="Last Name"></input>
                    </div>
                    <div className=" flex flex-col justify-around col-span-2">
                        <input className=" rounded-3xl pl-2 pt-6 pb-6" {...register("Email")} placeholder="Email Address"></input>
                    </div>
                    <div className=" flex flex-col justify-around col-span-2">
                        <input className="rounded-3xl pl-2 pt-6 pb-6" {...register("Phone Number")} placeholder="Phone Number"></input>
                    </div>


                </div>

                <div className="flex flex-col gap-4 h-full">
                    <h4 className="text-xl">
                        Tell us what you need
                    </h4>
                    <div className=" flex flex-col col-span-2 h-full">

                        <textarea className=" msgInput border-2 border-gray-200 rounded-2xl h-full p-2" {...register("Message")} placeholder="Message"></textarea>
                    </div>
                </div>
                <input type="submit" className="  bg-sky-300 rounded-2xl p-4 w-full hover:bg-blue-700 font-bold text-gray-100 py-2 px-4 "></input>

            </form >

        </>
    )
}