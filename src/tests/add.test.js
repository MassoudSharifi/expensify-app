const generateGritting = name => `hell ${name}`;

test("should add gritting", () => {
  const result = generateGritting("Masoud");
  expect(result).toBe("hell Masoud");
});
