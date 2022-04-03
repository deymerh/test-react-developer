import {useEffect, useState} from "react";
import axios from "axios";

export const useFecthUsers = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchList = async () => {
      try {
        const { data } = await axios.get(`/api/users/`);
        setList(data.data)
      } catch (error) {
        throw new Error('Error al cargar los datos')
      }
    };
    fetchList();
  }, [])
  return {list}
}
