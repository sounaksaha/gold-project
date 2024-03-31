import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import silverImage from "./silver.png";

export default function SilverRate() {
  const [rates, setRate] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/silverprices/allsilver');
            if (!response.ok) {
                throw new Error('Failed to fetch silver data');
            }

            const data = await response.json();
            setRate(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching customer data:', error);
            setLoading(false);
        }
    };

    fetchData();
}, []);


  return (
    <div className="min-h-screen flex flex-col">
      <div className="container px-6 py-8 mx-auto">
        <h3 className="text-3xl font-medium text-gray-700">Past Silver Rate</h3>

        <div className="mt-8"></div>

        <div className="flex flex-col mt-8">
          <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Date
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Silver Rate
                    </th>
                   
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {loading ? (
                    <tr>
                      <td colSpan="8">Loading...</td>
                    </tr>
                  ) : (
                    rates.map((rate, index) => (
                      <tr key={index}>
                        <td className="px-6 py-3 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-10 h-10 rounded-full"
                                src={silverImage}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium leading-5 text-gray-900">
                                {rate.date}
                              </div>
                              <div className="text-sm leading-5 text-gray-500"></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900">
                            {rate.silverPrice}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
