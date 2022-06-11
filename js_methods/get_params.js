const getUrlParam = (key) => {
  const url = new URL(window.location.href);
  const value = url.searchParams.get(key);
  return value;
};

const url = 'https://www.google.com/search?q=linux&sxsrf=ALiCzsbBBZ5qO88ZhdKqXA_BFxNpC8MbkA%3A1654397093851&ei=pRicYvqJM7q2uvQPy6aWuAM&ved=0ahUKEwi68OG4pZX4AhU6m44IHUuTBTcQ4dUDCA8&uact=5&oq=linux&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBQgAEMsBMgQIABBDMgUIABDLATIFCAAQywEyBQgAEMsBMgUIABDLATIFCAAQywEyBQgAEMsBMgsILhDHARDRAxDLAToHCCMQ6gIQJzoECCMQJzoLCC4QgAQQxwEQ0QM6CwguEIAEEMcBEKMCOg4ILhCABBDHARCjAhDUAjoICC4QgAQQ1AI6BQgAEIAEOgcILhDUAhBDOgQILhBDOgoILhDHARDRAxBDOgoILhDHARCjAhBDOgUILhCABEoECEEYAEoECEYYAFAAWLIOYJsSaAFwAHgAgAHpAYgB8giSAQMyLTWYAQCgAQGwAQrAAQE&sclient=gws-wiz'

