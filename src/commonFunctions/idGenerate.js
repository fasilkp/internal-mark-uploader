export const replaceSpecialCharecters=(str)=>{
    return (" "+str).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "_").replace(/ /g, '_').toLowerCase().substr(1, str.length)
  }
