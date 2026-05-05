const server = Bun.serve({
  port: Number(process.env.PORT) || 5555,
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/health") {
      return Response.json({ status: "ok", timestamp: new Date().toISOString() });
    }

    return Response.json({ message: "Yazars API" });
  },
});

console.log(`🚀 API server running at http://localhost:${server.port}`);
