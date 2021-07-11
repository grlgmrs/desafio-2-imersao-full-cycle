import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@material-ui/core";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import http from "../http";
import { Route } from "../model";

interface RoutesListProps {
  routes: Route[];
}

const Home: NextPage<RoutesListProps> = ({ routes }) => {
  return (
    <>
      <Head>
        <title>Desafio 2 - Imersão Full Cycle</title>
        <meta name="description" content="Routes application" />
      </Head>
      <main>
        <Typography component="h1" variant="h2" gutterBottom>
          Rotas
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {routes.map((route, key) => (
            <Grid item xs={12} sm={6} md={4} key={key}>
              <Card>
                <CardHeader
                  title={
                    <Typography
                      component="h2"
                      variant="h6"
                      style={{ color: "white" }}
                      gutterBottom
                    >
                      {route.title}
                    </Typography>
                  }
                  style={{
                    background: "rgb(28, 160, 241, 0.8)",
                  }}
                />
                <CardContent>
                  <Typography component="h2" variant="h6" gutterBottom>
                    Origem
                  </Typography>
                  <Typography component="p" gutterBottom>
                    Lat: {route.startPosition.lat}; Lang:{" "}
                    {route.startPosition.long}:
                  </Typography>
                  <Typography component="h2" variant="h6" gutterBottom>
                    Destino
                  </Typography>
                  <Typography component="p" gutterBottom>
                    Lat: {route.endPosition.lat}; Lang: {route.endPosition.long}
                    :
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<RoutesListProps> = async (
  context
) => {
  const { data: routes } = await http.get("routes");

  return {
    props: {
      routes,
    },
  };
};
