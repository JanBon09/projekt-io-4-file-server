const pathPrefix = "../resources"

class File{
    static enumerator = 0;

    constructor(title, fileName) {
        this.title = title;
        this.path = pathPrefix + fileName;
    }
}