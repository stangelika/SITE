import { NextApiRequest, NextApiResponse } from 'next'

// Простейшая demo-функция для лайков (можно доработать для реального хранения)
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Принимает {src}, отвечает OK
    res.status(200).json({ success: true })
  } else {
    res.status(405).end()
  }
}