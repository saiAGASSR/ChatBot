const TailwindCard = ()=>{

    return(
        <>

            <div className="flex flex-col">

                <div className="">

                    <h1>News you can trust</h1>

                </div>

                    <div className="flex flex-col align-items-center">

                        <h1>Stay up to date with the latest! </h1>
                        <P>Subscribe to our newsletter for the latest news straight into your inbox</P>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                        <button>Subscribe Now</button>
                        <p>We value your privacy</p>
        
                    </div>

            </div>

        </>
    )

}

export default TailwindCard;