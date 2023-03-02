function getDomainNameFromURL(url) {
  const urlObj = new URL(url);
  // console.log(urlObj);
  return urlObj.hostname;
}

const bootdevURL = "https://boot.dev/learn/learn-python";
const domainName = getDomainNameFromURL(bootdevURL);
console.log(`The domain name for ${bootdevURL} is ${domainName}`);
