const pathPrefix = "../resources"

class FileInfo {
    static enumerator = 0;

    constructor(title, fileName) {
        this.title = title;
        this.path = pathPrefix + fileName;
    }
}