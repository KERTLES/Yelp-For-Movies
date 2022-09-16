

let cens;
async function getAccount() {

  const tokenUrl = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/get/token/`;
  const request = await fetch(tokenUrl, {
    method: "delete",
    credentials: "include",
    mode: "cors",
  });

  if (request.ok) {
    const tokenData = await request.json()
    const Url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/accounts/${tokenData.token['id']}`;
    const autoResponse = await fetch(Url)

    if (autoResponse.ok) {
      const autoData = await autoResponse.json()

      cens = autoData.censored
    }
  }

}
getAccount()

export function setting(bul) {
  cens = bul
}

export function censors(description) // censorship
{

  const badWords = ["fuck", "shit", 'ass', 'poop', 'fun', 'movie', 'hell', 'butthole', 'adam', 'sandler']
  if (cens === true) {
    let description_list = description.split(/[.!,\s]/)
    let new_list = []
    for (let d = 0; d < description_list.length; d++) {
      if (badWords.includes(description_list[d].toLowerCase())) {
        new_list.push("*".repeat(description_list[d].length))
      }
      else {
        new_list.push(description_list[d])
      }
    }
    let result = ""
    for (let w = 0; w < new_list.length; w++) {
      if (w === new_list.length - 1) {
        result += new_list[w]
      }
      else {
        result += new_list[w] + " "
      }
    }
    return result
  }
  else {
    return description
  }
}