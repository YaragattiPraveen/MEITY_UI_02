import { useState } from "react";
import Form_1 from "../Forms/Form_1";
import Form_2 from "../Forms/Form_2";
import Form_3 from "../Forms/Form_3";
import Form_4 from "../Forms/Form_4";
import Form_5 from "../Forms/Form_5";
import Form_6 from "../Forms/Form_6";

const Working_Capital_Loan = ({ closemodel,title }) => {
  const [page, setPage] = useState(0);

  function DisplayForm() {
    if (page === 0) {
      return <Form_1 />;
    } else if (page === 1) {
      return <Form_2 />;
    } else if (page === 2) {
      return <Form_3 />;
    } else if (page === 3) {
      return <Form_4 />;
    } else if (page === 4) {
      return <Form_5 />;
    } else if (page === 5) {
      return <Form_6 />;
    }
  }

  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-4 max-w-[300px] mx-auto md:max-w-lg lg:max-w-2xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center text-bg__color justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-xl font-semibold font-Roboto py-3">
                {title}
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
            <div className="relative px-6 py-3 flex-auto">{DisplayForm()}</div>
            {/*footer*/}
            <div className="flex items-center justify-between px-6 py-3 border-t border-solid border-slate-200 rounded-b">
              <button
                style={{
                  visibility: page === 0 ? "hidden" : "visible",
                }}
                onClick={() => setPage(page - 1)}
                disabled={page === 0}
                className="bg-bg__color text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Back
              </button>
              {page === 5 ? (
                <button
                  className="bg-bg__color text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Submit
                </button>
              ) : (
                <button
                  disabled={page === 5}
                  onClick={(prevPage) => setPage(page + 1)}
                  className="bg-bg__color text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Working_Capital_Loan;
