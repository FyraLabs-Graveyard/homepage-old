import { Button, Card, Container, Row, Text } from "@nextui-org/react";
import styles from "../styles/index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faL } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { Col } from "@nextui-org/react";
import Head from "next/head";

export const TauCard = () => (
  <Card cover css={{ w: "300px", height: "290px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          New
        </Text>
        <Text h2 color="white" css={{ mt: "1px" }}>
          tauOS
        </Text>
      </Col>
    </Card.Header>
    <Card.Body>
      <Card.Image
        src="/pb.svg"
        css={{
          linearGradient: "125deg, $pink500 -20%, $pink600 100%",
        }}
        height={400}
        width="100%"
        alt="tauOS abstract background"
      />
    </Card.Body>
    <Card.Footer
      blur
      css={{
        position: "absolute",
        bgBlur: "#ffffff",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#000" size={12}>
            The next generation OS.
          </Text>
          <Text color="#000" size={12}>
            Early Alpha
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <a href="https://tauos.co">
              <Button
                auto
                rounded
                css={{ opacity: "90%", backgroundColor: "$black" }}
              >
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Learn More
                </Text>
              </Button>
            </a>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);

export const PhotonCard = () => (
  <Card cover css={{ w: "300px", height: "290px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          New
        </Text>
        <Text h2 color="white" css={{ mt: "1px" }}>
          photonBrowser
        </Text>
      </Col>
    </Card.Header>
    <Card.Body>
      <Card.Image
        src="/bb.svg"
        css={{
          linearGradient: "125deg, $pink500 -20%, $pink600 100%",
        }}
        height={400}
        width="100%"
        alt="photonBrowser abstract background"
      />
    </Card.Body>
    <Card.Footer
      blur
      css={{
        position: "absolute",
        bgBlur: "#ffffff",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#000" size={12}>
            Open-source, forever.
          </Text>
          <Text color="#000" size={12}>
            In development
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <a href="https://github.com/FyraLabs/photonBrowser">
              <Button
                auto
                rounded
                css={{ opacity: "90%", background: "$black" }}
              >
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Contribute
                </Text>
              </Button>
            </a>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);

const Home = () => {
  return (
    <>
      <Head>
        <title>FyraLabs</title>
        <meta property="og:title" content="FyraLabs" />
        <meta property="og:url" content="https://fyralabs.com" />
        <meta
          property="og:description"
          content="We build technology that makes a difference."
        />
        <meta property="og:type" content="business.business" />
        <meta property="og:image" content="/banner.png" />
        <meta
          name="description"
          content="We build technology that makes a difference."
        />
      </Head>
      <Container
        css={{
          p: 50,
          minHeight: "100vh",
          m: 0,
          gap: "50px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        display="flex"
        direction="column"
        wrap="nowrap"
        gap={0}
        className={styles.bg}
        fluid
        responsive={false}
      >
        <Container
          gap={0}
          fluid
          css={{ textAlign: "center" }}
          display="flex"
          direction="column"
        >
          <Text h1 weight="bold">
            Welcome to{" "}
            <Text
              span
              css={{
                textGradient: "125deg, $pink500 20%, $blue500 100%",
              }}
              weight="black"
            >
              FyraLabs
            </Text>
          </Text>
          <Text h2 size={30} weight="normal">
            We{" "}
            <Text
              span
              css={{
                textGradient: "125deg, $pink500 -20%, $pink600 100%",
              }}
              weight="bold"
            >
              build technology
            </Text>{" "}
            that{" "}
            <Text
              span
              css={{
                textGradient: "125deg, $blue400 -20%, $blue500 100%",
              }}
              weight="bold"
            >
              makes a difference
            </Text>{" "}
            for all.
          </Text>
        </Container>

        <Container
          display="flex"
          gap={0}
          fluid
          css={{ gap: "48px", justifyContent: "center" }}
        >
          <TauCard />
          <PhotonCard />
        </Container>

        <Container
          css={{
            margin: 0,
            p: 0,
            fontSize: "1.75rem",
            gap: "0.65rem",
            justifyContent: "center",
          }}
          display="flex"
          direction="row"
        >
          <a href="mailto:contact@fyralabs.com">
            <Button color="primary" auto ghost>
              <FontAwesomeIcon icon={faEnvelope} />
            </Button>
          </a>
          <a href="https://discord.gg/5fdPuxTg5Q">
            <Button color="primary" auto ghost>
              <FontAwesomeIcon icon={faDiscord} />
            </Button>
          </a>
          <a href="https://twitter.com/teamfyralabs">
            <Button color="primary" auto ghost>
              <FontAwesomeIcon icon={faTwitter} />
            </Button>
          </a>
          <a href="https://github.com/fyralabs">
            <Button color="primary" auto ghost>
              <FontAwesomeIcon icon={faGithub} />
            </Button>
          </a>
        </Container>
      </Container>
    </>
  );
};

export default Home;
