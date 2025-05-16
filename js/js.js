document.getElementById('calorieForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = parseFloat(document.getElementById('activity').value);

    if (isNaN(age) || isNaN(weight) || isNaN(height) || !gender || isNaN(activity)) {
        document.getElementById('result').innerText = "Prosím vyplňte všechna pole správně.";
        return;
    }

    // Harris-Benedictova rovnice
    let bmr;
    if (gender === 'male') {
        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }

    const calories = Math.round(bmr * activity);

    document.getElementById('result').innerHTML = `
        <strong>Vaše denní kalorická potřeba:</strong><br>
        <span style="font-size: 1.5em; font-weight: bold;">${calories} kcal</span>
    `;
});
