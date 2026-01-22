import NavBar from "../components/NavBar";
import '../style/Contact.css'
import Form from "./Form";

export default function ContactPage() {
    return (
        <>
            <div className="contact-hero-container">
                <NavBar />
                <div className="hero-text-container text-black ">
                    <h1 className=" bg-white p-4 rounded-2xl">
                        Contact us
                    </h1>

                </div>
            </div>

            <div className="contact-us-box flex m-24 rounded 2xl  border-2 border-solid border-gray-300 rounded-3xl">
                <div className="  contact-us-text p-8  h-full w-full flex justify-center  flex-col ">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-6xl font-medium ">Get in Touch with us!</h1>

                        <p className=" text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis id turpis eu sodales. Nullam molestie euismod dolor, sed varius lectus sodales dapibus. Aliquam at rhoncus leo. </p>

                        <div className="contact-options text-gray-600 text-lg">
                            <p>Phone #: XXX-XXX-XXXX</p>
                            <p>Email: BANDAR@gmail.com</p>
                        </div>
                        <div>
                            <p className="text-lg font-medium underline ">Hours of Operations</p>
                            <p className=" pl-4 text-md text-gray-600">Monday-Friday: 9am - 5pm</p>
                        </div>


                    </div>

                </div>
                <div className="contact-form w-full h-full flex flex-col justify-center p-8">
                    <Form />
                </div>
            </div>
        </>
    )
}