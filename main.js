function adRemover() {
  //'use strict';
  const promotedLinks = document.querySelectorAll(
    '.promotedlink, [data-before-content="advertisement"]'
  )
  //To remove even the box of advertisement, uncomment below:
  //const ads = document.querySelectorAll('[data-before-content="advertisement"]')
  //for(const ad of ads){
  //  ad.parentElement.parentElement.remove()
  //console.log("ad removed")
  //}
  for (const promotion of promotedLinks) {
    promotion.remove()
    //console.log("removing promotion")
  }
}

document.addEventListener("DOMNodeInserted", adRemover)
