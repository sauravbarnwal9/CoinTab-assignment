import React from "react";
import { Box,Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileTable } from "../components/ProfileTable";
import { EmptyCard } from "../components/EmptyCard";
import Pagination from "../components/Pagination.jsx";



export const User = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [dataall,setDataall] = useState([]);
  
  const navigate = useNavigate();
  const fetchUsers = () => {
    fetch(`https://backendcointab.vercel.app/data?limit=10&page=${page}&filter=${filter}`)
      .then((response) => response.json())
      .then((data) => {
        
        setData(data);
      });
  };
  const fetchUsersall = () => {
    fetch(`https://backendcointab.vercel.app/alldata?filter=${filter}`)
      .then((response) => response.json())
      .then((data) => {
        
        setDataall(data);
      });
  };
  useEffect(() => {
    fetchUsers();
    fetchUsersall();
  }, [page, filter]);

  useEffect(() => {
    fetchUsers();
    fetchUsersall();
  }, []);

  return (
    <Box>
      <FlexComponent filter={filter} setFilter={setFilter} setPage={setPage}/>
      
{
  data.length==0?<><EmptyCard /></>
  :<>
  <ProfileTable page={page} setPage={setPage} data={data} number={Math.ceil(dataall.length/10)}/>
  <Pagination currentpage={page} handlePage={setPage} totalPages={Math.ceil(dataall.length/10)}/>
  </>
}
    </Box>
  );
};


