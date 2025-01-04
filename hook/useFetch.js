import { useState, useEffect } from "react";
import axios from "axios";

// const useFetch = (endpoint, query) => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const options = {
//     method: "GET",
//     url: `https://jsearch.p.rapidapi.com/${endpoint}`,
//     headers: {
//       "X-RapidAPI-Key": '',
//       "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
//     },
//     params: { ...query },
//   };

//   const fetchData = async () => {
//     setIsLoading(true);

//     try {
//       const response = await axios.request(options);

//       setData(response.data.data);
//       setIsLoading(false);
//     } catch (error) {
//       setError(error);
//       console.log(error)
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const refetch = () => {
//     setIsLoading(true);
//     fetchData();
//   };

//   return { data, isLoading, error, refetch };
// };


const CLASSES = [
    {
        id: 1,
        class_title: "JKUATCU CBR 2025",
        start_date: "2025-01-6",
        institution: "JKUATCU",
        location:"Juja",
        moderator: "M Mike",
        coordinator: "Gichuki"
    },
    {
        id: 2,
        class_title: "Community baptist Church",
        start_date: "2025-01-6",
        institution: "CBC Ruiru",
        location:"Ruiru",
        moderator: "John Doe",
        coordinator: "Gichuki"
    },
    {
        id: 3,
        class_title: "Garrissa Situation",
        start_date: "2025-01-6",
        institution: "Garissa Primary",
        location:"Hola",
        moderator: "John Doe",
        coordinator: "Gichuki"
    },
    {
        id: 4,
        class_title: "Hola College",
        start_date: "2025-01-6",
        institution: "NHFANc",
        location:"Tana River",
        moderator: "John Doe",
        coordinator: "Gichuki"
    },
    {
        id: 5,
        class_title: "React Native",
        start_date: "2025-01-6",
        institution: "JKUATCU",
        location:"Juja",
        moderator: "John Doe",
        coordinator: "Gichuki"
    },
    {
        id: 6,
        class_title: "Community baptist Church",
        start_date: "2025-01-6",
        institution: "CBC Ruiru",
        location:"Ruiru",
        moderator: "John Doe",
        coordinator: "Gichuki"
    },
    {
        id: 7,
        class_title: "React Native",
        start_date: "2025-01-6",
        institution: "JKUATCU",
        location:"Juja",
        moderator: "John Doe",
        coordinator: "Gichuki"
    },
    {
        id: 8,
        class_title: "Community baptist Church",
        start_date: "2025-01-6",
        institution: "CBC Ruiru",
        location:"Ruiru",
        moderator: "John Doe",
        coordinator: "Gichuki"
    }
]


const useFetch = (endpoint, query) => {
    return {data: CLASSES, isLoading: false, error: null, refetch: () => {}}
}

export default useFetch;



