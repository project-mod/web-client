import React from "react";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { api_urls } from "@url/api_urls";
import { Register_Response_401 } from "@types/api_response/register";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session: Register_Response_401 = await axios.post(
    api_urls.register,
    {}
  );
  return { props: { res: session } };
};

const Home: NextPage = ({
  res,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <div></div>;
};

export default Home;
