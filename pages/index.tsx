import {
  Button,
  Card,
  Container,
  Link,
  Row,
  styled,
  Text,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCat,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import NextLink from "next/link";

import { Col } from "@nextui-org/react";
import Head from "next/head";

const Badge = styled("div", {
  bg: "$blue600",
  borderRadius: "$pill",
  px: "$5",
});

const NewsBanner = styled("div", {
  display: "flex",
  gap: "$5",
  alignItems: "center",
  my: "$10",
});

export const TauCard = () => (
  <Card
    css={{ w: "300px", height: "290px" }}
    // TODO: NextUI sets this as section, which is an abstract aria role, and not valid. File an issue?
    role="figure"
  >
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
    <Card.Image
      src="/pb.svg"
      css={{
        linearGradient: "125deg, $pink500 -20%, $pink600 100%",
      }}
      objectFit="cover"
      height={400}
      width="100%"
      alt="tauOS abstract background"
    />
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
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
                  Get Tau
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
  <Card
    css={{ w: "300px", height: "290px" }}
    // TODO: NextUI sets this as section, which is an abstract aria role, and not valid. File an issue?
    role="figure"
  >
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
    <Card.Image
      src="/bb.svg"
      css={{
        linearGradient: "125deg, $pink500 -20%, $pink600 100%",
      }}
      objectFit="cover"
      height={400}
      width="100%"
      alt="photonBrowser abstract background"
    />
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
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
        <title>Fyra Labs</title>
        <meta property="og:title" content="Fyra Labs" />
        <meta property="og:url" content="https://fyralabs.com" />
        <meta
          property="og:description"
          content="We build technology that makes a difference."
        />
        <meta property="og:type" content="business.business" />
        <meta property="og:image" content="/logo.png" />
        <meta
          name="description"
          content="We build technology that makes a difference."
        />
      </Head>
      <Container
        css={{
          p: 50,
          pt: 0,
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
        fluid
        responsive={false}
      >
        <Container
          gap={0}
          fluid
          css={{ textAlign: "center", alignItems: "center" }}
          display="flex"
          direction="column"
        >
          <NewsBanner>
            <Badge>
              <Text small weight="black">
                NEW
              </Text>
            </Badge>
            <NextLink href="/join">
              <Link
                css={{
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "$5",
                  svg: {
                    transition: "transform 0.2s ease-in-out",
                  },
                  "&:hover svg": {
                    transform: "translateX(5px)",
                  },
                }}
                color="text"
              >
                Now accepting staff applications{" "}
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </NextLink>
          </NewsBanner>
          <Text h1 weight="bold">
            Welcome to{" "}
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
            We{" "}
            <Text
              span
              css={{
                textGradient: "125deg, $pink600 -20%, $pink700 100%",
              }}
              weight="bold"
            >
              build technology
            </Text>{" "}
            that{" "}
            <Text
              span
              css={{
                textGradient: "125deg, $blue500 -20%, $blue600 100%",
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
          <Button
            color="primary"
            auto
            ghost
            as="a"
            aria-label="Email Fyra Labs"
            // TODO: File issue about typings being wrong with custom components
            // @ts-ignore
            href="mailto:contact@fyralabs.com"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </Button>
          <Button
            color="primary"
            auto
            ghost
            as="a"
            aria-label="Fyra Labs Discord"
            // TODO: File issue about typings being wrong with custom components
            // @ts-ignore
            href="https://discord.gg/5fdPuxTg5Q"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </Button>
          <Button
            color="primary"
            auto
            ghost
            as="a"
            aria-label="Fyra Labs Twitter"
            // TODO: File issue about typings being wrong with custom components
            // @ts-ignore
            href="https://twitter.com/teamfyralabs"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Button>
          <Button
            color="primary"
            auto
            ghost
            as="a"
            aria-label="Fyra Labs GitHub"
            // TODO: File issue about typings being wrong with custom components
            // @ts-ignore
            href="https://github.com/fyralabs"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Button>
        </Container>
      </Container>
    </>
  );
};

export default Home;
