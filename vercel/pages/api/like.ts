// Простейшая demo-функция для лайков (можно доработать для реального хранения)
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Принимает {src}, отвечает OK
    res.status(200).json({ success: true })
  } else {
    res.status(405).end()
  }
}