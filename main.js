function isTouchDevice() {
    return 'ontouchstart' in document.documentElement;
}
if (isTouchDevice()){
    // Do mobile device stuff here
}
else {
    // Do computer stuff here
}
