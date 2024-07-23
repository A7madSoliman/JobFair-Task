import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CustomerTable() {
  const [data, setData] = useState([]);
  const [record, setRecord] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://a7madsoliman.github.io/JSON-API/db.json"
        );
        setData(response.data.transactions || []);
        setRecord(response.data.transactions || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setRecord(
        data.filter((item) => item.amount.toString().includes(searchTerm))
      );
    }, 300); // 300ms debounce time

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, data]);

  const handleSearch = (event) => {
    const value = event.target.value;
    if (isNaN(value)) {
      alert("Please enter a valid number");
      return;
    }
    setSearchTerm(value);
  };

  return (
    <>
      <div className="relative overflow-x-auto">
        <input
          type="text"
          placeholder="Search By Amount"
          aria-label="Search transactions by amount"
          className="form-control w-full mb-3 py-2 text-center"
          onChange={handleSearch}
        />
        {loading ? (
          <div className="text-center py-4">Loading...</div>
        ) : (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  CUSTOMER ID
                </th>
                <th scope="col" className="px-6 py-3">
                  DATE
                </th>
                <th scope="col" className="px-6 py-3">
                  AMOUNT
                </th>
              </tr>
            </thead>
            <tbody>
              {record.length > 0 ? (
                record.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{item.id}</td>
                    <td className="px-6 py-4">{item.customer_id}</td>
                    <td className="px-6 py-4">{item.date}</td>
                    <td className="px-6 py-4">{item.amount}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    No records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}

        <Link
          to="/graph"
          className="border hover:bg-gray-700 text-white bg-gray-500 rounded py-2 px-2 mt-4 block w-fit ms-auto"
        >
          Click Here To Graph
        </Link>
      </div>
    </>
  );
}
