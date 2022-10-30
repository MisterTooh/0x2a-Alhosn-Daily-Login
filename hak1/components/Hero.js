import { useState } from 'react';

export default function Hero() {

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [studentID, setStudentID] = useState('');


    // const reject = event => {

    // }

    // const approve = event => {

    // }

    const reset = event => {
        setData(null);
    }


    //saving studentID from input
    const changeStudentID = event => {
        setStudentID(event.target.value);
    };

    //fetching data from "STUDENTID" from server 
    const fetchStudentData = async event => {
        setLoading(true);
        var s =  "http://localhost:8080/student/search?cardId=" + studentID;
        setStudentID('');
        console.log('SSSSS', s);
        var d = await fetch(s, {mode: 'no-cors'})
        console.log(d);
        // .then((res) => res.json())
        // .then((data) => {
        //     setData(data);
        //     setLoading(false);
        // });
        console.log('handleClick 👉️', data);
    };

    //Return while fatching
    if (isLoading) return (
        <div className="pt-64 text-center text-white text-XL">
            <p>LOADING...</p>
        </div>
    );

    //Return if data is empty
    if (!data) return (
        <div className="pt-[10%] flex-inline pl-[45%] justify-center items-center">
            <div className="text-white text-XL">
                <p>No profile data, enter another id or add user to the system</p>
            </div>
            <div className="pt-12 text-balck">
                <input
                    type="text"
                    id="studentID"
                    name="studentID"
                    onChange={changeStudentID}
                    value={studentID}
                    autoComplete="off"
                />
                <button className="ml-4 btn" onClick={fetchStudentData}>Click</button>
            </div>
        </div>
    );

    //main div return when data fetched successfully
    return (
        <div className="">
            <div className="flex text-white justify-around h-auto">
                <div className="flex-inline justify-around space-y-10 h-auto">
                    <div>
                        <label className="block text-sm font-medium ">Card Id</label>
                        <div className="text-white bg-[#A3ABAA] px-8 py-2 rounded-lg text-xl font-bold flex items-center">
                            {data.cardId}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium ">UID</label>
                        <div className="text-white bg-[#A3ABAA] px-8 py-2 rounded-lg text-xl font-bold flex items-center">
                         {data.UID}
                        </div>
                    </div>
                </div>


                <div className="flex-inline justify-around h-auto">
                    <div>
                        <label className="block text-sm font-medium ">Full Name</label>
                        <div className="text-white bg-[#A3ABAA] px-8 py-2 rounded-lg text-xl font-bold flex items-center">
                         {data.fullName}
                        </div>
                    </div>
                    <div className="pt-12 max-w-[200px]">
                        <img src="images/profile.png" alt="Italian Trulli" />
                        <div className="text-center pt-14">
                            {
                                data.alhosnStatus
                                ? <h1 className="text-[#3AC710]">GREEN PASS</h1>
                                : <h1 className="text-[#D72121]">NOT AUTHORIZED</h1>
                            }
                        </div>
                    </div>
                </div>


                <div className="flex-inline justify-around space-y-10 h-auto">
                    <div>
                        <label className="block text-sm font-medium ">INTRA LOGIN</label>
                        <div className="text-white bg-[#A3ABAA] px-8 py-2 rounded-lg text-xl font-bold flex items-center">
                         {data.loginName}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium ">STATUS</label>
                        <div className="text-white bg-[#A3ABAA] px-8 py-2 rounded-lg text-xl font-bold flex items-center">
                         {data.status}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium ">Close Reason</label>
                        <div className="text-white bg-[#A3ABAA] px-8 py-2 rounded-lg text-xl font-bold flex items-center">
                            {data.closeReason}
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-[120px] flex justify-around h-auto">
                <div className="item w-auto h-32">
                    <div className="flex space-x-2 justify-center">
                        <button type="button" 
                                onClick={reset}
                                className="inline-block px-6 py-2.5 bg-black text-white 
                                font-medium text-xs leading-tight uppercase 
                                rounded shadow-md hover:bg-blue-700 hover:shadow-lg 
                                focus:bg-blue-700 focus:shadow-lg focus:outline-none 
                                focus:ring-0 active:bg-blue-800 active:shadow-lg 
                                transition duration-150 ease-in-out">Reject</button>
                    </div>
                </div>
                <div className="item w-auto h-32">
                <div className="flex space-x-2 justify-center">
                        <button type="button" 
                                onClick={reset}
                                className="inline-block px-6 py-2.5 bg-[#9010C7] text-white 
                                font-medium text-xs leading-tight uppercase 
                                rounded shadow-md hover:bg-blue-700 hover:shadow-lg 
                                focus:bg-blue-700 focus:shadow-lg focus:outline-none 
                                focus:ring-0 active:bg-blue-800 active:shadow-lg 
                                transition duration-150 ease-in-out">APPROVE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

