import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CustomerTable() {
  const [data, setData] = useState([]);
  const [record, setRecord] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://a7madsoliman.github.io/JSON-API/db.json"
        );
        setData(response.data.customers || []);
        setRecord(response.data.customers || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setRecord(
        data.filter((item) => item.name.toLowerCase().includes(searchTerm))
      );
    }, 300); // 300ms debounce time

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, data]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div className="relative overflow-x-auto">
      <input
        type="text"
        placeholder="Search By Name"
        className="form-control w-full mb-3 py-2 text-center"
        onChange={handleSearch}
      />
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              NAME
            </th>
            <th scope="col" className="px-6 py-3 items-center">
              EMAIL
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
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center py-4">
                No records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
