function sendEmail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        let subject = encodeURIComponent(`Message from ${name}`);
        let body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        let mailtoLink = `mailto:c0de-w0lfe@example.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        document.getElementById("result").innerText = "Email sent! Check your email client to complete.";
    } else {
        document.getElementById("result").innerText = "Please fill in all fields.";
    }
}



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

function calculateLevel() {
    let tankHeight = parseFloat(document.getElementById("tank-height").value);
    let liquidLevel = parseFloat(document.getElementById("liquid-level").value);
    let tankVolume = parseFloat(document.getElementById("tank-volume").value);

    if (tankHeight && liquidLevel && tankVolume && liquidLevel <= tankHeight) {
        let percentage = (liquidLevel / tankHeight) * 100;
        let currentVolume = (liquidLevel / tankHeight) * tankVolume;
        document.getElementById("result").innerHTML = 
            `Level: ${percentage.toFixed(2)}% full<br>Current Volume: ${currentVolume.toFixed(2)} gal`;
    } else {
        document.getElementById("result").innerText = "Please enter valid values (level ≤ height).";
    }
}
