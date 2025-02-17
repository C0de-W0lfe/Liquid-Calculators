function calculateFrictionLoss() {
    const pipeLength = parseFloat(document.getElementById("pipe-length").value);
    const pipeDiameter = parseFloat(document.getElementById("pipe-diameter").value) / 12; // Convert inches to feet
    const flowVelocity = parseFloat(document.getElementById("flow-velocity").value);
    const frictionFactor = parseFloat(document.getElementById("friction-factor").value);
    const g = 32.2; // ft/s²

    if (pipeLength <= 0 || pipeDiameter <= 0 || flowVelocity <= 0 || frictionFactor <= 0) {
        document.getElementById("friction-loss-result").innerHTML = "Please enter valid positive values.";
        return;
    }

    const headLoss = frictionFactor * (pipeLength / pipeDiameter) * (Math.pow(flowVelocity, 2) / (2 * g));
    document.getElementById("friction-loss-result").innerHTML = `Head Loss: ${headLoss.toFixed(2)} ft`;
}

function calculateVelocity() {
    const flowRate = parseFloat(document.getElementById("flow-rate").value) * 0.002228; // Convert gpm to ft³/s
    const pipeDiameter = parseFloat(document.getElementById("pipe-diameter-velocity").value) / 12; // Convert inches to feet

    if (flowRate <= 0 || pipeDiameter <= 0) {
        document.getElementById("velocity-result").innerHTML = "Please enter valid positive values.";
        return;
    }

    const area = Math.PI * Math.pow(pipeDiameter, 2) / 4;
    const velocity = flowRate / area;
    document.getElementById("velocity-result").innerHTML = `Flow Velocity: ${velocity.toFixed(2)} ft/s`;
}