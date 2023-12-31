const Loan_Application = ({ closemodel }) => {
  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-4 max-w-[300px] mx-auto md:max-w-lg lg:max-w-4xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center text-bg__color justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-xl font-semibold font-Roboto py-3">
                Loan Application
              </h3>
              <button
                onClick={() => {
                  closemodel(false);
                }}
                className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                X
              </button>
            </div>
            {/*body*/}
            <div className="relative px-6 py-3 flex-auto">
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Loan Window ID
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    disabled="true"
                    placeholder="W412586"
                    type="text"
                    className="border-2 p-1 w-full rounded-md"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Loan ID
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    placeholder="Loan Id"
                    className="border-2 p-1 w-full rounded-md"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Name of Payee
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    className="border-2 p-1 w-full rounded-md"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Account Number
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    className="border-2 p-1 w-full rounded-md"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    IFSC Number
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    className="border-2 p-1 w-full rounded-md"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Bank Name
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    className="border-2 p-1 w-full rounded-md"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Amount
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    className="border-2 p-1 w-full rounded-md"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Interest Rate (%)
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    placeholder="12"
                    className="border-2 p-1 w-full rounded-md"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Tenure of Loan (in Months)
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    className="border-2 p-1 w-full rounded-md"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Attach Invoice
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="file"
                    className="border-2 p-1 w-full rounded-md"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Purpose
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    className="border-2 p-1 w-full rounded-md"
                  />
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end px-6 py-3 border-t border-solid border-slate-200 rounded-b">
              <button
                onClick={() => closemodel(false)}
                className="bg-bg__color text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Loan_Application;
