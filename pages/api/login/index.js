import Filter from 'bad-words'
import { getConditionQuery } from 'services/query'

const filter = new Filter()

export default async function handler (req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body

    const myquery = `email = ? AND password = ?`
    const value = [filter.clean(email), filter.clean(password)]

    const response = await getConditionQuery('user', myquery, value)

    const { data } = response

    if (data.length === 0) {
      const myquery1 = `email = ? `
      const value1 = [filter.clean(email)]

      const response1 = await getConditionQuery('user', myquery1, value1)
      const data1 = response1.data

      if (data1.length === 0) {
        return res.status(200).json({
          success: false,
          message: "Email doesn't exist. Please Register First."
        })
      }

      return res.status(200).json({
        success: false,
        message: 'Password is incorrect'
      })
    }

    return res
      .status(200)
      .json({ success: true, message: 'Success', userdata: data[0] })
  }
}
