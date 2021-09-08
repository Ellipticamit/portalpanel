import Filter from 'bad-words'
import { insertQuery, getConditionQuery } from 'services/query'

const filter = new Filter()

export default async function handler (req, res) {
  if (req.method === 'POST') {
    const { name, email, mobile, password, experience, expertise } = req.body

    const checkQuery = 'email = ?'
    const checkvalue = [filter.clean(email)]

    const response1 = await getConditionQuery('user', checkQuery, checkvalue)

    const { data } = response1

    if (data && data.length > 0) {
      return res
        .status(200)
        .json({ apiData: null, message: 'User Already Exist.' })
    }
    const myquery = `user (name, email, password, mobile, experience, expertise)
    VALUES (?, ?, ?, ?, ?, ?)`
    const value = [
      filter.clean(name),
      filter.clean(email),
      filter.clean(password),
      filter.clean(mobile),
      filter.clean(experience),
      filter.clean(expertise)
    ]

    const response = await insertQuery(myquery, value)

    return res.status(200).json({ apiData: response, message: 'success' })
  }
}
