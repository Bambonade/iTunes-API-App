export default class iTunesCollection {
    _arr;

    constructor(arr) {
        if (!Array.isArray(arr)) {
            arr = [];
        }
        this._arr = arr;
    }
}