async function addUsser() {
  axios({
    method: 'post',
    data: {
      name: "Testing",
      lastName: "With Jest",
      password: "123456789",
      email: "test@jest.com",
      address: "Avenida Velverde #56",
      phone: "87144556699",
    },
    url: 'https://pokemon-store-api.herokuapp.com/api/users',
  }).then((result) => {
    return result
  }).catch((error) => {
    console.log(error);
    return error;
  });
}

test('adds a new usser', () => {
  const resultado = addUsser()
  expect(resultado.data.user.legth).toBeGreaterThan(3)
});