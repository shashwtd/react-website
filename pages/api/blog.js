import axios from 'axios';

export default async function handler(req, res) {
  const blogId = req.query.id;
  const url = `https://raw.githubusercontent.com/shashwtt/blogs/main/${blogId}.md`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}
