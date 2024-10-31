let cooldown = 30000; // Initial cooldown at 30 seconds
let highDemandCount = 0;
const maxCooldown = 60000; // Max cooldown at 60 seconds

module.exports = (req, res) => {
  if (req.method === 'POST') {
    highDemandCount++;
    if (highDemandCount >= 15) {
      cooldown = Math.min(cooldown + 5000, maxCooldown); // Increase cooldown by 5s up to max
      highDemandCount = 0; // Reset demand count
    }
  } else {
    if (highDemandCount < 5) cooldown = Math.max(cooldown - 5000, 10000); // Reduce cooldown if demand is low
  }

  res.status(200).json({ cooldown });
};
