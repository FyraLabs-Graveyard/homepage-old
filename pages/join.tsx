import { faCat, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Container, Grid, Spacer, styled, Text } from "@nextui-org/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import jobs from "../jobs.json";

interface Job {
  type: "development";
  branch: string;
  position: string;
  body: string;
}

const PositionIcon = styled(FontAwesomeIcon, {
  w: "34px",
  h: "34px",
});

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      jobs,
    },
  };
};

const PositionCard: React.FC<Job> = ({ body, branch, position, type }) => {
  //  css={{ p: "$6", maxWidth: "500px" }}
  return (
    <a href="https://airtable.com/shr7nmRedL9NgR1JT">
      <Card isPressable css={{ p: "$6", mw: 500, h: "100%" }}>
        <Card.Header>
          <PositionIcon icon={type === "development" ? faCode : faCat} />
          <Grid.Container css={{ pl: "$6" }}>
            <Grid xs={12}>
              <Text h4 css={{ lineHeight: "$xs" }}>
                {position}
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text css={{ color: "$accents8" }}>{branch}</Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
        <Card.Body css={{ py: "$2" }}>
          <Text>{body}</Text>
        </Card.Body>
      </Card>
    </a>
  );
};

const Join = ({ jobs }: { jobs: Job[] }) => {
  return (
    <Container
      css={{
        textAlign: "center",
        minHeight: "100vh",
        p: 50,
      }}
    >
      <Head>
        <title>Join Fyra Labs</title>
        <meta property="og:title" content="Join Fyra Labs" />
        <meta property="og:url" content="https://fyralabs.com/join" />
        <meta
          property="og:description"
          content="Join an inclusive team building cutting-edge technology at Fyra Labs."
        />
        <meta property="og:type" content="business.business" />
        <meta property="og:image" content="/logo.png" />
        <meta
          name="description"
          content="Join an inclusive team building cutting-edge technology at Fyra Labs."
        />
      </Head>
      <Text h1>
        Join Us at{" "}
        <Text
          span
          css={{
            textGradient: "125deg, $pink600 20%, $blue600 100%",
          }}
          weight="black"
        >
          Fyra Labs
        </Text>
      </Text>
      <Text h2 size={30} weight="normal">
        Join an{" "}
        <Text
          span
          css={{
            textGradient: "125deg, $pink600 -20%, $pink700 100%",
          }}
          weight="bold"
        >
          inclusive
        </Text>{" "}
        team building{" "}
        <Text
          span
          css={{
            textGradient: "125deg, $blue500 -20%, $blue600 100%",
          }}
          weight="bold"
        >
          cutting-edge
        </Text>{" "}
        technology.
      </Text>
      <Spacer />
      <Grid.Container gap={2} justify="center" alignItems="stretch" wrap="wrap">
        {jobs.map((job, i) => (
          <Grid key={i}>
            <PositionCard {...job} />
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
};

export default Join;
