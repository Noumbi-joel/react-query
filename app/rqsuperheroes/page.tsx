"use client";

import axios from "axios";
import { useQuery } from "react-query";

export interface IProps {
  id: string;
  name: string;
  alterEgo: string;
}

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export default function RQSuperHeroes() {
  const { data, isLoading, isError, error } = useQuery(
    "super-heroes",
    fetchSuperHeroes
  );
  let errors: any = error;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{errors?.message}</div>;
  }

  return (
    <div>
      <h2>RQ SUPER HEROES PAGE</h2>
      {data?.data.map((h: IProps) => (
        <div key={h.name}>{h.name}</div>
      ))}
    </div>
  );
}
