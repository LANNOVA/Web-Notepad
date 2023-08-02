document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("notepad");
    const downloadButton = document.getElementById("download-btn");
    const nightModeButton = document.getElementById("night-mode-btn");

    downloadButton.addEventListener("click", function () {
        const textToSave = textarea.value;
        const blob = new Blob([textToSave], { type: "text/plain;charset=utf-8" });
        const filename = "notepad.txt";

        if (navigator.msSaveBlob) {
            navigator.msSaveBlob(blob, filename);
        } else {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    });
    nightModeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
//created by SRAVstudios