// import CardFour from '../../components/CardFour.tsx';
// import CardOne from '../../components/CardOne.tsx';
// import CardThree from '../../components/CardThree.tsx';
// import CardTwo from '../../components/CardTwo.tsx';
// import ChartOne from '../../components/ChartOne.tsx';
// import ChartThree from '../../components/ChartThree.tsx';
// import ChartTwo from '../../components/ChartTwo.tsx';
// import ChatCard from '../../components/ChatCard.tsx';
// import MapOne from '../../components/MapOne.tsx';


import { useEffect, useState } from "react";
import goldCoinImage from "./gold.png";
import silverCoinImage from "./silver.png";
import sip from "./sip.png";
import { Link } from "react-router-dom";
// import TableOne from '../../components/TableOne.tsx';
export default function Dashboard() {
    const [goldPrices, setGoldPrices] = useState([]);
    const [silverPrices, setSilverPrices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalCustomers, setTotalCustomers] = useState(0);
    const [QuantityGold, setQuantityGold] = useState(0);
    const [QuantitySilver, setQuantitySilver] = useState(0);


    useEffect(() => {
      const fetchData = async () => {
          try {
              const goldResponse = await fetch('http://localhost:8080/api/goldprices');
              const silverResponse = await fetch('http://localhost:8080/api/silverprices');
              const response = await fetch('http://localhost:8080/api/customers/total');
              const responseGold = await fetch('http://localhost:8080/api/goldquantity');
              const responseSilver = await fetch('http://localhost:8080/api/silverquantity');

              const data = await response.json();
              setTotalCustomers(data);

              if (!responseGold) {
                  throw new Error('Failed to fetch data');
              }
              else {
                  const goldquantity = await responseGold.json();
                  setQuantityGold(goldquantity);
              }
              if (!responseSilver) {
                  throw new Error('Failed to fetch data')
              }
              else{
                  const silverquantity = await responseSilver.json();
                  setQuantitySilver(silverquantity)
              }

              if (!goldResponse.ok || !silverResponse.ok) {
                  throw new Error('Failed to fetch data');
              }
              else {
                  const goldData = await goldResponse.json();
                  const silverData = await silverResponse.json();

                  setGoldPrices(goldData);
                  setSilverPrices(silverData);
              }


              setLoading(false);
          } catch (error) {
              console.error('Error fetching data:', error);
           
              setLoading(false);
          }
      };

      fetchData();

  }, []);


  return (
    <>
            <div className="px-4 sm:px-8 bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-300 text-white min-h-screen">

       
        <div className="flex-1 p-8">
        <dl class="mt-0 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          
          <div class="relative overflow-hidden rounded-lg bg-gray-50 px-4 pb-20 pt-7 shadow sm:px-6 sm:pt-6">
            <dt>
              <div class="absolute rounded-md bg-blue-300 p-3">
                <svg
                  class="h-6 w-6 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <p class="ml-16 truncate text-xl font-medium text-gray-900">
                Total Customer
              </p>
            </dt>
            <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p class="text-2xl font-semibold text-gray-900">{totalCustomers}</p>
             
              <div class="absolute inset-x-0 bottom-0 bg-gray-600 px-4 py-6 sm:px-6">
                <div class="text-sm">
                  <a
                    href="#"
                    class="font-medium text-gray-50 hover:text-gray-100"
                  >
                    {/* View all */}
                    <span class="sr-only"> Total Subscribers stats</span>
                  </a>
                </div>
              </div>
            </dd>
          </div>
          <div class="relative overflow-hidden rounded-lg bg-gray-50 px-4 pb-20 pt-7 shadow sm:px-6 sm:pt-6">
            <dt>
              <div class="absolute rounded-md p-3 flex items-center">
                <img
                  className="h-10 w-10"
                  src={goldCoinImage} 
                  alt="Gold Coin"
                />
              </div>
              <p class="ml-16 truncate text-xl font-medium text-gray-900">
                Today Gold Rate
              </p>
            </dt>
            <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
            {goldPrices.map((goldPrice, index) => (
              <p key={index} class="text-2xl font-semibold text-gray-900">{goldPrice.goldPrice}</p> ))}
              {goldPrices.map((goldPrice, index) => (
              <p key={index} class="ml-7 flex items-baseline text-m font-semibold text-green-600">
                <span class="sr-only"> Increased by </span>
                Date: {goldPrice.date}
              </p>
                ))}
              <div class="absolute inset-x-0 bottom-0 bg-gray-600 px-4 py-4 sm:px-6">
                <div class="text-sm">
                  <Link to="./goldrate" class="font-medium text-gray-50 hover:text-gray-900"
                  >
                    View all<span class="sr-only"> Avg. Open Rate stats</span>
                  </Link>
                </div>
              </div>
            </dd>
          </div>
          <div class="relative overflow-hidden rounded-lg bg-gray-50 px-4 pb-20 pt-7 shadow sm:px-6 sm:pt-6">
            <dt>
              <div class="absolute rounded-md p-3 flex items-center">
                <img
                  className="h-10 w-10" 
                  src={goldCoinImage} 
                  alt="Gold Coin"
                />
              </div>
              <p class="ml-16 truncate text-xl font-medium text-gray-900">
                Gold Quantity
              </p>
            </dt>
            <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p class="text-2xl font-semibold text-gray-900">{QuantityGold} gm</p>
             
              <div class="absolute inset-x-0 bottom-0 bg-gray-600 px-4 py-4 sm:px-6">
                <div class="text-sm">
                  <Link
                    to="./edit"
                    class="font-medium text-gray-50 hover:text-gray-900"
                  >
                    Edit<span class="sr-only"> Avg. Click Rate stats</span>
                  </Link>
                </div>
              </div>
            </dd>
          </div>
          <div class="relative overflow-hidden rounded-lg bg-gray-50 px-4 pb-20 pt-7 shadow sm:px-6 sm:pt-6">
            <dt>
              <div class="absolute rounded-md p-3 flex items-center">
                <img
                  className="h-10 w-10" 
                  src={silverCoinImage} 
                  alt="Gold Coin"
                />
              </div>
              <p class="ml-16 truncate text-xl font-medium text-gray-900">
               Silver Rate
              </p>
            </dt>
            <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
            {silverPrices.map((silverPrice, index) => (
              <p key={index} class="text-2xl font-semibold text-gray-900">{silverPrice.silverPrice}</p>))}
              {silverPrices.map((silverPrice, index) => (
              <p key={index} class="ml-4 flex items-baseline text-m font-semibold text-red-600">
              
                <span class="sr-only"> Decreased by </span>
                Date: {silverPrice.date}
              </p>
              ))}
              <div class="absolute inset-x-0 bottom-0 bg-gray-600 px-4 py-4 sm:px-6">
                <div class="text-sm">
                <Link to="./silverrate" class="font-medium text-gray-50 hover:text-gray-900"
                  >
                    View all<span class="sr-only"> Avg. Open Rate stats</span>
                  </Link>
                </div>
              </div>
            </dd>
          </div>
          <div class="relative overflow-hidden rounded-lg bg-gray-50 px-4 pb-20 pt-7 shadow sm:px-6 sm:pt-6">
            <dt>
              <div class="absolute rounded-md p-3 flex items-center">
                <img
                  className="h-10 w-10" // Adjust the size as needed
                  src={silverCoinImage} // Replace with the actual path to your gold coin image
                  alt="Gold Coin"
                />
              </div>
              <p class="ml-16 truncate text-xl font-medium text-gray-900">
                Silver Quantity
              </p>
            </dt>
            <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p class="text-2xl font-semibold text-gray-900">{QuantitySilver} gm</p>
              {/* <p class="ml-2 flex items-baseline text-sm font-semibold text-red-600">
                <svg
                  class="h-5 w-5 flex-shrink-0 self-center text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only"> Decreased by </span>
                3.2%
              </p> */}
              <div class="absolute inset-x-0 bottom-0 bg-gray-600 px-4 py-4 sm:px-6">
                <div class="text-sm">
                  <Link
                    to="./editsilver"
                    class="font-medium text-gray-50 hover:text-gray-900"
                  >
                    Edit<span class="sr-only"> Avg. Click Rate stats</span>
                  </Link>
                </div>
              </div>
            </dd>
          </div>
          <div class="relative overflow-hidden rounded-lg bg-gray-50 px-4 pb-20 pt-7 shadow sm:px-6 sm:pt-6">
            <dt>
              <div class="absolute rounded-md p-3 flex items-center">
                <img
                  className="h-10 w-10" // Adjust the size as needed
                  src={sip} // Replace with the actual path to your gold coin image
                  alt="Gold Coin"
                />
              </div>
              <p class="ml-16 truncate text-xl font-medium text-gray-900">
                S.I.P
              </p>
            </dt>
            <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p class="text-2xl font-semibold text-gray-900">24.57%</p>
              <p class="ml-2 flex items-baseline text-sm font-semibold text-red-600">
                <svg
                  class="h-5 w-5 flex-shrink-0 self-center text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only"> Decreased by </span>
                3.2%
              </p>
              <div class="absolute inset-x-0 bottom-0 bg-gray-600 px-4 py-4 sm:px-6">
                <div class="text-sm">
                  <a
                    href="#"
                    class="font-medium text-gray-50 hover:text-gray-900"
                  >
                    View all<span class="sr-only"> Avg. Click Rate stats</span>
                  </a>
                </div>
              </div>
            </dd>
          </div>
        </dl>
        </div>
      </div>
    </>
  );
}
