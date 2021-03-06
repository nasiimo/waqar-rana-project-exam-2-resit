import { Jumbotron } from "react-bootstrap";

export default function Banner(props) {
  const bannerStyle = {
    color: props.color,
    minHeight: props.minHeight,
    maxHeight: props.maxHeight,
    marginTop: props.marginTop,
    marginBottom: props.marginBottom,
    paddingTop: props.paddingTop,
    backgroundColor: props.backgroundColor,
    textAlign: props.textAlign,
  };

  return (
    <>
      <Jumbotron style={bannerStyle}>
        <h1>{props.heading}</h1>
        <p>{props.paragraph}</p>
        <p>{props.button}</p>
      </Jumbotron>
    </>
  );
}
