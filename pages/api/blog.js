import axios from 'axios';

export default async function handler(req, res) {
  const blogId = req.query.id;
  const url = `https://raw.githubusercontent.com/${process.env.GITHUB_USERNAME}/blogs/${process.env.GITHUB_BRANCH}/${blogId}.md`;

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
