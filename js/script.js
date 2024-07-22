console.log("Script loaded successfully!");

document.getElementById('scriptForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const scriptText = document.getElementById('scriptInput').value;
    const topN = parseInt(document.getElementById('topN').value, 10);

    if (!scriptText.trim()) {
        alert("Please enter some text!");
        return;
    }

    console.log("Script Text:", scriptText);
    console.log("Top N:", topN);

    const words = scriptText
        .toLowerCase()
        .replace(/[0-9.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
        .split(/\s+/);

    console.log("Words Array:", words);

    const wordCount = {};
    words.forEach(word => {
        if (word) {
            wordCount[word] = (wordCount[word] || 0) + 1;
        }
    });

    console.log("Word Count Object:", wordCount);

    const sortedWords = Object.entries(wordCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, topN);

    console.log("Sorted Words:", sortedWords);

    displayResults(sortedWords);
});

function displayResults(words) {
    const wordList = document.getElementById('wordList');
    wordList.innerHTML = ''; // Clear previous results

    words.forEach(([word, count]) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${word}: ${count}`;
        wordList.appendChild(listItem);
    });
}
