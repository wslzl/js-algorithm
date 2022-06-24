function Demo() {
  return new Promise((resolve, reject) => {
    resolve({ x: 1 });
  }).then((res) => {
    console.log(res);
    return 9;
  });
}

async function Run() {
  const res = await Demo();
  console.log(res);
}

Run();
