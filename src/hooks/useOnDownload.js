export const useOnDownload = (file, nameOfFile) => {
    fetch(file).then((response) => {
        response.blob().then((blob) => {
            let url = window.URL.createObjectURL(blob);
            let anchor = document.createElement("a");
            anchor.href = url;
            anchor.download = nameOfFile;
            anchor.click();
        });
    });
};