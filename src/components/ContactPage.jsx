import NavBar from "../components/NavBar";
import '../style/Contact.css'
import Form from "./Form";

export default function ContactPage() {
    return (
        <>
            <div className="contact-hero-container">
                <NavBar />
                <div className="contact-us-box flex justify-between p-8 ml-24 mr-24 mt-10 mb-10  size-fit rounded-2xl bg-gray-100  border-gray-300 rounded-3xl">
                    <div className="  contact-us-text h-full flex justify-around flex-col w-2/5">

                        <div className="flex flex-col gap-6">
                            <h1 className="text-6xl font-medium ">Get in Touch with us!</h1>

                            <p className=" text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis id turpis eu sodales. Nullam molestie euismod dolor, sed varius lectus sodales dapibus. Aliquam at rhoncus leo. </p>

                        </div>
                        <div>
                            <div className="contact-options grid grid-cols-2 gap-6">
                                <div>
                                    <p className="text-xl">Location</p>
                                    <p className="text-sm">121 Topaz gate, Chestermere AB</p>
                                    <div>
                                        <p className="text-md font-medium underline ">Hours of Operations</p>
                                        <p className=" pl-4 text-md">Monday-Friday: 9am - 5pm</p>
                                    </div>

                                </div>

                                <div>
                                    <p className="text-xl">Phone</p>
                                    <p className="text-sm">#: XXX-XXX-XXXX</p>
                                </div>
                                <div>
                                    <p className="text-xl">Email</p>
                                    <p className="text-sm">BANDAR@gmail.com</p>

                                </div>

                            </div>

                        </div>




                    </div >
                    <div className="contact-form  h-full flex flex-col  w-2/6">
                        <Form />
                    </div>
                </div >
            </div >


        </>
    )
}