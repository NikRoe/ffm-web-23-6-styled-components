import styled from "styled-components";
import Link from "next/link";

const Button = styled.button`
  all: unset;
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: white;
  background-color: var(--primary-color);

  &:hover {
    color: black;
    background-color: var(--primary-background);
  }
`;

const StyledLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: var(--primary-color);

  &:hover {
    color: var(--secondary-color);
  }
`;

export default function HomePage() {
  return (
    <>
      <h1>Hello from Next.js</h1>
      <Button type="button">Click me</Button>
      <p>
        This is a <StyledLink href="/">styled link</StyledLink>.
      </p>
    </>
  );
}
