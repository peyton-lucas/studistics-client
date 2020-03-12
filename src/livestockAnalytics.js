const DataFrame = require('dataframe-js').DataFrame;
const linear = require('everpolate').linear;

export default function livestockAnalytics(data) {
  const df = new DataFrame(data, ['earId', 'weight', 'collectionTime']);

  let livestockData = {
    day60: [],
    day90: [],
    day120: []
  };

  df.groupBy('earId').aggregate((groupedMetrics) => {
    const animalMetrics = groupedMetrics.select('collectionTime', 'weight').castAll([Number, Number]);
    const initialTime = animalMetrics.toArray('collectionTime')[0];
    const collectionTimes = animalMetrics
      .toArray('collectionTime')
      .map(x => x - initialTime);

    const weights = animalMetrics.toArray('weight');

    if (weights.length >= 3) {
      const predictedWeights = linear([60*86400, 90*86400, 120*86400], collectionTimes, weights);
      livestockData.day60.push(predictedWeights[0]);
      livestockData.day90.push(predictedWeights[1]);
      livestockData.day120.push(predictedWeights[2]);
    }
  });

  return livestockData;
};