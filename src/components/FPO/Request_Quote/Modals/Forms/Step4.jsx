// eslint-disable-next-line react/prop-types
const Step4 = ({ show }) => {
    return (
        <>
            <div className="relative px-6 py-3 flex-auto">
                <h2 className="text-bg__color font-Roboto text-xl font-semibold mb-4">Payment Details</h2>
                <div className="md:flex lg:flex-row mb:4 flex-col">
                    <div className="lg:w-1/2 sm:w-full mr-1">
                        <label className="block text-grey-darker font-Roboto text-silver__color mb-2 mt-3">
                            Invoice Amount
                        </label>
                    </div>
                    <div className="lg:w-1/2 sm:w-full mr-1">
                        <input
                            type="number"
                            placeholder="100"
                            disabled
                            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        />
                    </div>
                </div>
                <div className="md:flex lg:flex-row mb:4 flex-col">
                    <div className="lg:w-1/2 sm:w-full mr-1">
                        <label className="block text-grey-darker font-Roboto text-silver__color mb-2 mt-3">
                            Date of Payment
                        </label>
                    </div>
                    <div className="lg:w-1/2 sm:w-full mr-1">
                        <input
                            type="text"
                            placeholder="08/06/2023"
                            disabled
                            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        />
                    </div>
                </div>
                <div className="md:flex lg:flex-row mb-4 flex-col">
                    <div className="lg:w-1/2 sm:w-full mr-1">
                        <label className="block text-grey-darker font-Roboto text-silver__color mb-2 mt-3">
                            Upload Payment Proof
                        </label>
                    </div>
                    {
                        show ? <div className="lg:w-1/2 sm:w-full mr-1">
                            <input type="file" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                        </div> : <div className="lg:w-1/2 sm:w-full mr-1">
                            <button
                                className="bg-bg__color w-full text-center block text-white px-4 py-1 rounded">
                                View
                            </button>
                        </div>
                    }
                </div>
                {
                    show ? (<div className="md:flex lg:flex-row mt-4 mb:4 flex-col">
                        <div className="lg:w-1/2 sm:w-full mr-1">
                            <button
                                className="bg-bg__color w-full text-center block text-white px-4 py-1 rounded">
                                Submit
                            </button>
                        </div>
                    </div>) : ""
                }

            </div>
        </>
    )
}

export default Step4