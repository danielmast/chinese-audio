export default {
  async fetch(request) {
    const url = new URL(request.url);
    const doi = url.searchParams.get("doi");

    if (!doi) {
      return new Response("Missing doi parameter", { status: 400 });
    }

    const upstream = `https://www.blcup.com/Common/DownRes?doi=${doi}`;
    const response = await fetch(upstream);

    return new Response(response.body, {
      status: response.status,
      headers: {
        "Content-Type": "audio/mpeg",
        "Access-Control-Allow-Origin": "*",
      },
    });
  },
};
