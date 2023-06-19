import renderer from "react-test-renderer";
import { AuthProvider } from "../TokenDetails/AuthContext";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import SignIn from "../Component/Authentication/SignIn";
it("renders correctly", () => {
  const tree = renderer
    .create(
      <AuthProvider>
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      </AuthProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();

  const treeOne = renderer
    .create(
      <AuthProvider>
        <MemoryRouter>
          <SignIn></SignIn>
        </MemoryRouter>
      </AuthProvider>
    )
    .toJSON();
  expect(treeOne).toMatchSnapshot();
});

it("renders correctly", async () => {
  render(
    <AuthProvider>
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    </AuthProvider>
  );
  expect(screen.getByTestId("LockOutlinedIcon")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /sign in/i }));
  expect(
    screen.getByRole("textbox", { name: /username/i })
  ).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /sign in/i })).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /don't have an account\? sign up/i })
  ).toBeInTheDocument();
  expect(screen.getByText(/copyright © 2023\./i)).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /tupleinventory\.com/i })
  ).toBeInTheDocument();
});

describe("SignIn", () => {
  test("should show alert when username is not entered", async () => {
    const { getByRole, getByText } = render(
      <AuthProvider>
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      </AuthProvider>
    );
    const submitButton = getByRole("button", { name: "Sign In" });

    fireEvent.click(submitButton);

    await waitFor(() => {
      const alertMessage = getByText("Please enter your username.");
      expect(alertMessage).toBeInTheDocument();
    });
  });
});
