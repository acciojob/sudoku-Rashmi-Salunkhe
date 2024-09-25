//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    let selectedCell = null;

    // Select a cell when clicked
    document.querySelectorAll('#board td').forEach(cell => {
        cell.addEventListener('click', () => {
            // Ignore clicks on given-number cells
            if (cell.classList.contains('given-number')) return;

            // Remove 'selected' from previously selected cell, if any
            if (selectedCell) {
                selectedCell.classList.remove('selected');
            }

            // Select the current cell
            selectedCell = cell;
            cell.classList.add('selected');
        });
    });

    // Handle number button clicks
    document.querySelectorAll('.number-control').forEach(button => {
        button.addEventListener('click', () => {
            const number = button.textContent;
            const isCandidateMode = document.querySelector('#candidate-switch').checked;

            // Ensure a cell is selected
            if (!selectedCell) return;

            if (isCandidateMode) {
                // Toggle candidates in candidate mode
                const candidatesSpan = selectedCell.querySelector('.candidates');
                let candidates = candidatesSpan.textContent.split('').sort();

                // Add or remove the number from the candidates
                if (candidates.includes(number)) {
                    candidates = candidates.filter(n => n !== number);
                } else {
                    candidates.push(number);
                    candidates.sort();  // Keep the candidates sorted
                }

                candidatesSpan.textContent = candidates.join('');
            } else {
                // Place the number in the value span in normal mode
                const valueSpan = selectedCell.querySelector('.value');
                valueSpan.textContent = number;
            }
        });
    });
});
