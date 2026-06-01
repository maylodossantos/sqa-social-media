import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PostCard from "@/components/PostCard";

const post = {
  id: 1,
  title: "Post Teste",
  body: "Conteúdo do Post",
  liked: false,
};

describe("PostCard", () => {
  test("renderiza título e conteúdo", () => {
    render(
      <PostCard
        post={post}
        isAuthenticated={true}
        onLike={jest.fn()}
      />
    );

    expect(
      screen.getByText("Post Teste")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Conteúdo do Post")
    ).toBeInTheDocument();
  });
});