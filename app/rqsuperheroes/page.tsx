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
  const { data, isLoading } = useQuery("super-heroes", fetchSuperHeroes);

  if (isLoading) {
    return <div>Loading...</div>;
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
