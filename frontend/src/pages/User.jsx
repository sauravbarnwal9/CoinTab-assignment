import React from "react";
import { Box, Image, Stack, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileTable } from "../components/ProfileTable";
import Pagination from "../components/Pagination.jsx";
import FilterSection from "../components/FilterSection";

export const User = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [detail, setdetail] = useState([]);

  const navigate = useNavigate();
  const fetchUsers = () => {
    fetch(
      `https://backendcointab.vercel.app/api/data?limit=10&page=${page}&filter=${filter}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };
  const fetchUsersall = () => {
    fetch(`https://backendcointab.vercel.app/api/alldata?filter=${filter}`)
      .then((response) => response.json())
      .then((data) => {
        setdetail(data);
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
      <FilterSection filter={filter} setFilter={setFilter} setPage={setPage} />

      {data.length == 0 ? (
        <>
          {" "}
          <Stack mt="6" spacing="3">
            <Heading size="md">NO DATA AVAILABLE</Heading>
          </Stack>
        </>
      ) : (
        <>
          <ProfileTable
            page={page}
            setPage={setPage}
            data={data}
            number={Math.ceil(detail.length / 10)}
          />
          <Pagination
            currentpage={page}
            handlePage={setPage}
            totalPages={Math.ceil(detail.length / 10)}
          />
        </>
      )}
    </Box>
  );
};
