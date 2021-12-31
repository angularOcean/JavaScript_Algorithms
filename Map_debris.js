//This function transforms an objects average altitude into its orbital period in seconds
function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let orbitalArr = []
    for (let i = 0; i <arr.length; i++) {
      let tempDict = {
        name: null,
        orbitalPeriod: null
      }
      tempDict.name = arr[i].name
      let orb = 2*Math.PI *Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt, 3)/GM)
      tempDict.orbitalPeriod = Math.round(orb)
      orbitalArr.push(tempDict)
    }
    console.log(orbitalArr)
    return orbitalArr;
  }
  