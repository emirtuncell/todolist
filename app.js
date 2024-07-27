document.addEventListener('DOMContentLoaded', function() {
    // Metin alanlarını ve checkbox'ları seç
    const textInputs = document.querySelectorAll('input[type="text"]');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Metin alanlarını localStorage'dan al ve geri yükle
    textInputs.forEach((input, index) => {
        const value = localStorage.getItem(`textInput${index}`);
        if (value !== null) {
            input.value = value;
        }
    });

    // Checkbox durumlarını localStorage'dan al ve geri yükle
    checkboxes.forEach((checkbox, index) => {
        const isChecked = localStorage.getItem(`checkbox${index}`) === 'true';
        checkbox.checked = isChecked;
    });
});

// Metin alanlarındaki değişiklikleri localStorage'a kaydet
document.querySelectorAll('input[type="text"]').forEach((input, index) => {
    input.addEventListener('input', function() {
        localStorage.setItem(`textInput${index}`, this.value);
    });
});

// Checkbox durumundaki değişiklikleri localStorage'a kaydet
document.querySelectorAll('input[type="checkbox"]').forEach((checkbox, index) => {
    checkbox.addEventListener('change', function() {
        localStorage.setItem(`checkbox${index}`, this.checked);
    });
});
