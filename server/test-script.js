const run = async () => {
  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbzqnxognatgP7kzEFMeuWR7gkJxeJK7JZIQ_62TzgEVtxWPQHUmDOtG-JKU-AtudJaY/exec", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ test: "data" })
    });
    console.log(res.status);
    console.log(await res.text());
  } catch(e) {
    console.log(e);
  }
}
run();
