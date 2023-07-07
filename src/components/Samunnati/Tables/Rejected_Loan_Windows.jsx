import React, { useState } from "react";
import Loan_Application_Modal from '../FPO_Loan/Modal/Loan_Application_Modal'
const Rejected_Loan_Windows = () => {
  const [openModal, setModal] = useState(false);
  return (
    <>
      <div className="flex flex-col px-3">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="text-xs text-medium bg-green-200 border-b uppercase text-gray-600">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Date of Application
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      FPO ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Name of FPO
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Contact No
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Requested Window Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Loan Application
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Reason for Rejection
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-300">
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      2021-10-10
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      F555555
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      FPO 5
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      1234567890
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      100000
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      <button
                        onClick={() => setModal(true)}
                        className="bg-bg__color text-center block text-white px-4 py-1 rounded"
                      >
                        View
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      Not eligible
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {openModal && <Loan_Application_Modal closemodal={setModal}/>}
    </>
  );
};

export default Rejected_Loan_Windows;