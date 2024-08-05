function analyzeSentence(sentence) {
    // Initialize counters
    let charCount = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // Define vowels
    const vowels = "aeiouAEIOU";
    
    // Initialize previous character for word count
    let prevChar = ' ';

    // Read the sentence character by character
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        charCount++;  // Increment character count

        // Check if the character is a vowel
        if (vowels.includes(char)) {
            vowelCount++;
        }

        // Check if the character is a word separator (space) and the previous character was not a space
        if (char === ' ' && prevChar !== ' ') {
            wordCount++;
        }

        prevChar = char;  // Update previous character
    }

    // Add 1 to word count if the sentence is not empty and the last character is not a space
    if (sentence && sentence[sentence.length - 1] !== ' ') {
        wordCount++;
    }

    // Return the results
    return {
        length: charCount,
        words: wordCount,
        vowels: vowelCount
    };
}
