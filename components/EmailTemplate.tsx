import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export const EmailTemplate = () => {
  return (
    <Html>
      <Head />
      <Preview>{`You’re on the waitlist for ${process.env.NEXT_PUBLIC_SITE_NAME}`}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Text
              style={text}
            >{`Big welcome and thanks for subscribing to ${process.env.NEXT_PUBLIC_SITE_NAME}`}</Text>
            <Text style={text}>
              We'll keep you updated with important announcements and news.
            </Text>
            <Text style={text}>
              Ty for your interest ❤️
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "45px",
};

const text = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "400",
  color: "#404040",
  lineHeight: "26px",
  // padding: "0 40px",
};

const anchor = {
  textDecoration: "underline",
};
