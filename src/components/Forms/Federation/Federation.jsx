import { useState } from "react";
import Form2 from "./Form2";
import Form1 from "./Form1";
const Federation = () => {
    const [page, setPage] = useState(0);

    const color1 = "#3c8aea";
    const color2 = "#48d191";
    const color3 = "silver";
    const color4 = "silver";

    function DisplayForm() {
        if (page == 0) {
            return <Form1 />;
        } else if (page == 1) {
            return <Form2 />;
        }
    }

    return (
        <div className="py-4 px-8">
            {DisplayForm()}
            <div className="flex items-center justify-between mt-8">
                <button
                    style={{
                        backgroundImage:
                            page === 0
                                ? `linear-gradient(to right,  ${color3} 0%,${color4} 100%)`
                                : `linear-gradient(to right,  ${color1} 0%,${color2} 100%)`,
                    }}
                    onClick={() => setPage(page - 1)}
                    disabled={page === 0}
                    className="bg-gradient-to-r to-green-400 from-blue-500 py-2 w-[100px]
                    hover:bg-gradient-to-l 
                    transition duration-150 ease-in text-white px-4"
                >
                    Back
                </button>
                {page == 1 ? (
                    <button
                        className="bg-gradient-to-r to-green-400 from-blue-500 py-2 w-[100px]
                    hover:bg-gradient-to-l 
                    transition duration-150 ease-in text-white px-4"
                        type="submit"
                    >
                        Submit
                    </button>
                ) : (
                    <button
                        disabled={page === 1}
                        onClick={() => setPage(page + 1)}
                        className="bg-gradient-to-r to-green-400 from-blue-500 py-2 w-[100px]
                    hover:bg-gradient-to-l 
                    transition duration-150 ease-in text-white px-4"
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    )
}

export default Federation