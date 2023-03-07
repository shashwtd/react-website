import axios from 'axios'

export default async function handler(req, res) {
  try {
    const response = await axios.get(`https://raw.githubusercontent.com/shashwtt/blogs/main/data.json`)
    const data = response.data
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
