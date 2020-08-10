import axios from 'axios'

jest.mock('axios')
test('mock an module, such as axios', () => {
  const users = [{ name: 'Bob' }]
  const resp = { data: users }
  axios.get.mockResolvedValue(resp)
  return Users.all().then((data) => expect(data).toEqual(users))
})

class Users {
  static all() {
    return axios.get('/users.json').then((resp) => resp.data)
  }
}
