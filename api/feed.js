let cooldown = 10000; // Start cooldown at 10 seconds
let highDemandCount = 0;
const maxCooldown = 60000; // Max cooldown is 60 seconds

module.exports = (req, res) => {
  // Simulate a demand-based cooldown update
  if (req.method === 'POST') {
    highDemandCount++;
    if (highDemandCount >= 15) {
      cooldown = Math.min(cooldown + 5000, maxCooldown); // Increase cooldown by 5s
      highDemandCount = 0;
    }
  } else {
    // Reduce cooldown if demand is low
    if (highDemandCount < 5) cooldown = Math.max(cooldown - 5000, 10000);
  }

  res.status(200).json({ cooldown });
};
