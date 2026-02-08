import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Permitir preflight
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!webhookUrl) return res.status(500).json({ error: "Missing N8N_WEBHOOK_URL" });

    const payload = req.body; // Lo que mandes desde el formulario

    const r = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await r.text();
    if (!r.ok) return res.status(502).json({ error: "n8n error", detail: text });

    return res.status(200).json({ ok: true });
  } catch (e: any) {
    return res.status(500).json({ error: "server error", detail: String(e?.message ?? e) });
  }
}
